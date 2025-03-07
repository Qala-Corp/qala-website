"use client"

import { useEffect, useRef } from "react"

const secrets = [
  "TOPSECRET",
  "CLASSIFIED",
  "CONFIDENTIAL",
  "RESTRICTED",
  "SENSITIVE",
  "ENCRYPT",
  "DECRYPT",
  "CIPHER",
  "SECURE",
  "PRIVATE",
  "HIDDEN",
  "COVERT",
]

export function SecretRevealer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current


    if (!container) return

    const secretElements: HTMLSpanElement[] = []

    // Create and position secret elements
    for (let i = 0; i < 50; i++) {
      const span = document.createElement("span")
      span.textContent = secrets[Math.floor(Math.random() * secrets.length)]
      span.style.position = "absolute"
      span.style.left = `${Math.random() * 100}%`
      span.style.top = `${Math.random() * 300}vh` // Spread vertically across 3 times the viewport height
      span.style.transform = `rotate(${Math.random() * 360}deg)`
      span.style.opacity = "0.1"
      span.style.color = "var(--secret-color)"
      span.style.fontSize = `${Math.max(10, Math.random() * 24)}px`
      span.style.fontFamily = "monospace"
      span.style.pointerEvents = "none"
      container.appendChild(span)
      secretElements.push(span)
    }

    // Reveal secrets on scroll
    const revealSecrets = () => {
        console.log('hsould be revealed');
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight

      secretElements.forEach((span) => {
        const rect = span.getBoundingClientRect()
        const distance = Math.abs(rect.top - viewportHeight / 2)
        const opacity = Math.max(0.1, 1 - distance / (viewportHeight / 2))
        span.style.opacity = opacity.toString()
      })
    }

    window.addEventListener("scroll", revealSecrets)
    revealSecrets() // Initial call

    return () => {
      window.removeEventListener("scroll", revealSecrets)
      secretElements.forEach((span) => span.remove())
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none" />
}
