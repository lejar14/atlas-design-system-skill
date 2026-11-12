// Atlas Design System — Button
// Source: https://atlas-design-system-theta.vercel.app/getting-started
// Copied verbatim. This is the canonical reference for how every Atlas component
// should be structured (color/variant matrix, size scale, token usage, states).

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"
import { type LucideIcon } from "lucide-react"

export type ButtonColor = "brand" | "neutral" | "danger" | "warning" | "success"
export type ButtonVariant = "primary" | "secondary" | "tertiary"
export type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor
    variant?: ButtonVariant
    size?: ButtonSize
    leadingIcon?: LucideIcon
    trailingIcon?: LucideIcon
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: "gap-1.5 px-3 py-1.5 text-sm",
    md: "gap-1.5 px-4 py-2 text-sm",
    lg: "gap-2 px-5 py-2.5 text-base",
}

const ICON_SIZE: Record<ButtonSize, number> = { sm: 14, md: 16, lg: 18 }

// Filled (primary), Outline (secondary) and Text (tertiary) styles for
// each color family.
const COLOR_VARIANT_CLASSES: Record<ButtonColor, Record<ButtonVariant, string>> = {
    brand: {
        primary: "bg-[var(--primary500)] text-white hover:bg-[var(--primary600)] active:bg-[var(--primary700)] focus-visible:ring-[var(--primary300)]",
        secondary: "border border-[var(--primary500)] text-[var(--primary600)] hover:bg-[var(--primary50)] active:bg-[var(--primary100)] focus-visible:ring-[var(--primary300)]",
        tertiary: "text-[var(--primary600)] hover:bg-[var(--primary50)] active:bg-[var(--primary100)] focus-visible:ring-[var(--primary300)]",
    },
    neutral: {
        primary: "bg-[var(--neutral900)] text-white hover:bg-[var(--neutral800)] active:bg-[var(--neutral950)] focus-visible:ring-[var(--neutral400)]",
        secondary: "border border-[var(--neutral300)] text-[var(--neutral900)] hover:bg-[var(--neutral50)] active:bg-[var(--neutral100)] focus-visible:ring-[var(--neutral400)]",
        tertiary: "text-[var(--neutral900)] hover:bg-[var(--neutral50)] active:bg-[var(--neutral100)] focus-visible:ring-[var(--neutral400)]",
    },
    danger: {
        primary: "bg-[var(--danger500)] text-white hover:bg-[var(--danger600)] active:bg-[var(--danger700)] focus-visible:ring-[var(--danger300)]",
        secondary: "border border-[var(--danger500)] text-[var(--danger600)] hover:bg-[var(--danger50)] active:bg-[var(--danger100)] focus-visible:ring-[var(--danger300)]",
        tertiary: "text-[var(--danger600)] hover:bg-[var(--danger50)] active:bg-[var(--danger100)] focus-visible:ring-[var(--danger300)]",
    },
    warning: {
        primary: "bg-[var(--warning500)] text-white hover:bg-[var(--warning600)] active:bg-[var(--warning700)] focus-visible:ring-[var(--warning300)]",
        secondary: "border border-[var(--warning500)] text-[var(--warning600)] hover:bg-[var(--warning50)] active:bg-[var(--warning100)] focus-visible:ring-[var(--warning300)]",
        tertiary: "text-[var(--warning600)] hover:bg-[var(--warning50)] active:bg-[var(--warning100)] focus-visible:ring-[var(--warning300)]",
    },
    success: {
        primary: "bg-[var(--success500)] text-white hover:bg-[var(--success600)] active:bg-[var(--success700)] focus-visible:ring-[var(--success300)]",
        secondary: "border border-[var(--success500)] text-[var(--success600)] hover:bg-[var(--success50)] active:bg-[var(--success100)] focus-visible:ring-[var(--success300)]",
        tertiary: "text-[var(--success600)] hover:bg-[var(--success50)] active:bg-[var(--success100)] focus-visible:ring-[var(--success300)]",
    },
}

export function Button({
    color = "brand",
    variant = "primary",
    size = "md",
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    className,
    children,
    ...props
}: ButtonProps) {
    const iconSize = ICON_SIZE[size]
    return (
        <button
            className={cn(
                "inline-flex cursor-pointer items-center justify-center rounded-[var(--radius-md)] font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-40",
                COLOR_VARIANT_CLASSES[color][variant],
                SIZE_CLASSES[size],
                className
            )}
            {...props}
        >
            {LeadingIcon && <LeadingIcon size={iconSize} aria-hidden />}
            {children}
            {TrailingIcon && <TrailingIcon size={iconSize} aria-hidden />}
        </button>
    )
}
