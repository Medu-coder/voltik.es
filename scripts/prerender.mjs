import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

const ROOT = process.cwd()
const DIST_DIR = path.join(ROOT, 'dist')
const BLOG_TS = path.join(ROOT, 'src', 'features', 'blog', 'data', 'blogPosts.ts')
const APP_TSX = path.join(ROOT, 'src', 'App.tsx')
const BASE_URL = 'http://localhost:4173'

const EXCLUDED_ROUTES = ['*', 'not-found', '404']

function extractRoutesFromApp() {
  const appContent = fs.readFileSync(APP_TSX, 'utf8')
  const routeMatches = appContent.match(/path=["']([^"']+)["']/g) || []
  return routeMatches
    .map(match => match.match(/path=["']([^"']+)["']/)[1])
    .filter(route => !EXCLUDED_ROUTES.some(excluded => route.includes(excluded)))
    .filter(route => !route.includes(':'))
    .sort()
}

function parseBlogPosts(tsText) {
  const postBlocks = tsText.split(/}\s*,?\s*{\s*/g)
  const posts = []
  for (const block of postBlocks) {
    const idMatch = block.match(/id\s*:\s*['"]([^'"]+)['"]/)
    if (!idMatch) continue
    posts.push(idMatch[1])
  }
  return posts
}

function routeToFile(route) {
  if (route === '/') return path.join(DIST_DIR, 'index.html')
  const safeRoute = route.replace(/^\//, '')
  return path.join(DIST_DIR, safeRoute, 'index.html')
}

async function waitForServer(url, retries = 20) {
  for (let i = 0; i < retries; i += 1) {
    try {
      const res = await fetch(url, { method: 'GET' })
      if (res.ok) return
    } catch {
      // ignore
    }
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  throw new Error('Preview server did not start in time')
}

function localChromePath() {
  const candidates = []
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    candidates.push(process.env.PUPPETEER_EXECUTABLE_PATH)
  }
  if (process.platform === 'darwin') {
    candidates.push('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
    candidates.push('/Applications/Chromium.app/Contents/MacOS/Chromium')
  } else if (process.platform === 'win32') {
    candidates.push('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    candidates.push('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe')
  } else {
    candidates.push('/usr/bin/google-chrome')
    candidates.push('/usr/bin/chromium')
  }

  for (const candidate of candidates) {
    if (candidate && fs.existsSync(candidate)) {
      return candidate
    }
  }
  return null
}

async function resolveExecutable() {
  const local = localChromePath()
  if (local) {
    return {
      executablePath: local,
      args: [],
      defaultViewport: undefined,
      headless: true,
    }
  }

  return {
    executablePath: await chromium.executablePath(),
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  }
}

async function prerender() {
  const staticRoutes = extractRoutesFromApp()
  const blogIds = parseBlogPosts(fs.readFileSync(BLOG_TS, 'utf8'))
  const blogRoutes = blogIds.map(id => `/blog/${id}`)
  const routes = Array.from(new Set([...staticRoutes, ...blogRoutes]))

  const preview = spawn('npm', ['run', 'preview', '--', '--port', '4173', '--strictPort'], {
    stdio: 'inherit'
  })

  try {
    await waitForServer(`${BASE_URL}/`)

    const executable = await resolveExecutable()
    const browser = await puppeteer.launch({
      args: executable.args,
      defaultViewport: executable.defaultViewport,
      executablePath: executable.executablePath,
      headless: executable.headless,
    })

    for (const route of routes) {
      const page = await browser.newPage()
      const url = `${BASE_URL}${route}`
      await page.goto(url, { waitUntil: 'domcontentloaded' })
      await new Promise(resolve => setTimeout(resolve, 1500))

      const html = await page.content()
      const outFile = routeToFile(route)
      fs.mkdirSync(path.dirname(outFile), { recursive: true })
      fs.writeFileSync(outFile, html, 'utf8')
      await page.close()
    }

    await browser.close()
  } finally {
    preview.kill('SIGTERM')
  }
}

prerender().catch(err => {
  console.error(err)
  process.exit(1)
})
