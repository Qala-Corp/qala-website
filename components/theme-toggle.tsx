"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark") // Default to dark

  useEffect(() => {
    setMounted(true)

    // Get system preference and default to dark if not found
    if (resolvedTheme) {
      setCurrentTheme(resolvedTheme as "light" | "dark")
    } else {
      setTheme("dark")
    }
  }, [resolvedTheme, setTheme])

  if (!mounted) return null

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setCurrentTheme(newTheme)
    setTheme(newTheme)
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {currentTheme !== "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
