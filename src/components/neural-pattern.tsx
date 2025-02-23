"use client"

import { useEffect, useRef } from "react"
import { useMotionValue, useSpring } from "framer-motion"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  originalX: number
  originalY: number
}

export function NeuralPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get computed colors based on current theme
    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark")
      return {
        primary: isDark ? "rgba(149, 137, 225, " : "rgba(42, 30, 118, ", // Your primary color
        secondary: isDark ? "rgba(41, 29, 135, " : "rgba(133, 120, 226, ", // Your secondary color
      }
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create points
    const points: Point[] = []
    const numPoints = Math.floor((window.innerWidth * window.innerHeight) / 25000) // Adjust density
    const margin = 100

    for (let i = 0; i < numPoints; i++) {
      const x = margin + Math.random() * (canvas.width - margin * 2)
      const y = margin + Math.random() * (canvas.height - margin * 2)
      points.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        originalX: x,
        originalY: y,
      })
    }

    // Animation
    let animationFrameId: number
    const maxDistance = 150 // Max distance for connections
    const maxMouseDistance = 200 // Max distance for mouse interaction

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const colors = getThemeColors()

      // Update points
      points.forEach((point) => {
        // Mouse interaction
        const dx = smoothMouseX.get() - point.x
        const dy = smoothMouseY.get() - point.y
        const mouseDistance = Math.sqrt(dx * dx + dy * dy)

        if (mouseDistance < maxMouseDistance) {
          const force = (maxMouseDistance - mouseDistance) / maxMouseDistance
          point.vx -= (dx / mouseDistance) * force * 0.02
          point.vy -= (dy / mouseDistance) * force * 0.02
        }

        // Return to original position
        const homeForce = 0.01
        point.vx += (point.originalX - point.x) * homeForce
        point.vy += (point.originalY - point.y) * homeForce

        // Update position
        point.x += point.vx
        point.y += point.vy

        // Damping
        point.vx *= 0.98
        point.vy *= 0.98
      })

      // Draw connections
      ctx.beginPath()
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5
            ctx.strokeStyle = `${colors.primary}${opacity})`
            ctx.lineWidth = opacity * 1.5

            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
          }
        }
      }
      ctx.stroke()

      // Draw points
      points.forEach((point) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 3)
        gradient.addColorStop(0, `${colors.primary}0.3)`)
        gradient.addColorStop(1, `${colors.primary}0)`)
        ctx.fillStyle = gradient
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    // Touch move handler
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX.set(e.touches[0].clientX - rect.left)
      mouseY.set(e.touches[0].clientY - rect.top)
    }

    // Theme change observer
    const observer = new MutationObserver(() => {
      // Force redraw when theme changes
      if (canvas) {
        const context = canvas.getContext("2d")
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height)
        }
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [mouseX, mouseY, smoothMouseX, smoothMouseY])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-colors duration-700"
      style={{
        background: "transparent",
      }}
    />
  )
}

