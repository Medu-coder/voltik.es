import { useState, useCallback } from 'react'

interface FileUploadState {
  file: File | null
  error: string | null
  isValid: boolean
  isUploading: boolean
}

interface FileUploadOptions {
  maxSizeInMB?: number
  allowedTypes?: string[]
}

const DEFAULT_OPTIONS: FileUploadOptions = {
  maxSizeInMB: 10,
  allowedTypes: ['application/pdf']
}

export function useFileUpload(options: FileUploadOptions = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options }
  const [state, setState] = useState<FileUploadState>({
    file: null,
    error: null,
    isValid: false,
    isUploading: false
  })

  const validateFile = useCallback((file: File): string | null => {
    // Validar tipo de archivo
    if (!config.allowedTypes?.includes(file.type)) {
      return `Solo se permiten archivos PDF. Tipo detectado: ${file.type}`
    }

    // Validar tamaño
    const maxSizeInBytes = (config.maxSizeInMB || 10) * 1024 * 1024
    if (file.size > maxSizeInBytes) {
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2)
      return `El archivo es demasiado grande. Tamaño actual: ${fileSizeInMB}MB. Máximo permitido: ${config.maxSizeInMB}MB`
    }

    return null
  }, [config])

  const handleFileSelect = useCallback((file: File | null) => {
    if (!file) {
      setState({
        file: null,
        error: null,
        isValid: false,
        isUploading: false
      })
      return
    }

    const error = validateFile(file)
    
    setState({
      file,
      error,
      isValid: !error,
      isUploading: false
    })
  }, [validateFile])

  const reset = useCallback(() => {
    setState({
      file: null,
      error: null,
      isValid: false,
      isUploading: false
    })
  }, [])

  const setUploading = useCallback((isUploading: boolean) => {
    setState(prev => ({ ...prev, isUploading }))
  }, [])

  return {
    ...state,
    handleFileSelect,
    reset,
    setUploading
  }
}
