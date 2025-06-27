'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // 🛡 Prevent hydration mismatch

  return (
    <span
      onClick={() =>
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }
    >
      {resolvedTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </span>
  )
}
