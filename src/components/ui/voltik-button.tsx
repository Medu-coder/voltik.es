import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Redefinición de botones con variantes específicas de Voltik
const voltikButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:bg-foreground/90 shadow-md hover:shadow-lg",
        secondary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg", 
        outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        voltik: "bg-gradient-to-r from-primary to-secondary text-foreground font-bold hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
        emergency: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg animate-pulse",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface VoltikButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof voltikButtonVariants> {
  asChild?: boolean
}

const VoltikButton = React.forwardRef<HTMLButtonElement, VoltikButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(voltikButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
VoltikButton.displayName = "VoltikButton"

export { VoltikButton, voltikButtonVariants }