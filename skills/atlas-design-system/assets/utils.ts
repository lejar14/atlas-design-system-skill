// Atlas Design System — cn() utility
// Source: https://atlas-design-system-theta.vercel.app/getting-started
// Every Atlas component imports this from "@/lib/utils". Place it at src/lib/utils.ts.

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
