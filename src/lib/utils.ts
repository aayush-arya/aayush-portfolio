import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefixes a root-relative public asset path with Vite's configured base (e.g. '/aayush-portfolio/' on GitHub Pages). */
export function withBase(assetPath: string) {
  return import.meta.env.BASE_URL + assetPath.replace(/^\//, '')
}
