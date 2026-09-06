import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-[-0.01em] outline-none transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-[220ms] ease-[var(--ease-out)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:-translate-y-px hover:bg-primary/90 hover:shadow-[var(--shadow-card)] active:translate-y-0 active:scale-[0.99]",
        destructive:
          "bg-destructive text-white shadow-sm hover:-translate-y-px hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-line bg-surface text-ink shadow-xs hover:-translate-y-px hover:border-line-strong hover:bg-surface-2 hover:shadow-[var(--shadow-card)] active:translate-y-0 active:scale-[0.99]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:-translate-y-px hover:bg-charcoal-100 dark:hover:bg-charcoal-800 active:translate-y-0 active:scale-[0.99]",
        ghost:
          "text-ink-2 hover:bg-surface-2 hover:text-ink",
        link: "text-ink underline-offset-4 hover:text-forge dark:hover:text-forge-400",
      },
      size: {
        default: "h-10 px-5 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-[13px]",
        lg: "h-11 rounded-[10px] px-7 has-[>svg]:px-5",
        xl: "h-[52px] rounded-[12px] px-8 text-[15px] has-[>svg]:px-6",
        icon: "size-10 rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }