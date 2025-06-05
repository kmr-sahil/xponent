'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <span
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }}
    >
      {resolvedTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </span>
  )
}