import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-gold shadow-md",
        destructive:
          "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
        outline:
          "border border-black bg-white hover:bg-black hover:text-white",
        secondary:
          "bg-stone-light text-black border border-zinc-200 hover:border-black",
        ghost:
          "hover:bg-stone-light hover:text-black",
        link:
          "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-10 px-6 py-2",
        lg: "h-16 px-12 py-6 text-sm",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
