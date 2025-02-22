"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block fixed pointer-events-none z-50 w-8 h-8 border border-primary/50 rounded-full -ml-4 -mt-4 transition-transform duration-100 ease-out"
      />
      <div
        ref={cursorDotRef}
        className="hidden md:block fixed pointer-events-none z-50 w-2 h-2 bg-primary rounded-full -ml-1 -mt-1 transition-transform duration-75 ease-out"
      />
    </>
  )
}

