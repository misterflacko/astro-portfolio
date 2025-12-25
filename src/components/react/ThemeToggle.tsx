"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark")
  const [mounted, setMounted] = React.useState(false)

  // Initialize theme from localStorage or DOM
  React.useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
    } else {
      // Infer from current DOM
      const isDark = document.documentElement.classList.contains("dark") ||
        document.documentElement.dataset.theme === "dark"
      setTheme(isDark ? "dark" : "light")
    }
  }, [])

  // Apply theme changes
  React.useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const isDark = theme === "dark"

    root.dataset.theme = isDark ? "dark" : "light"
    root.classList.toggle("dark", isDark)
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full" disabled>
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
