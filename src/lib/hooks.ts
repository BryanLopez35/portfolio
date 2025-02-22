"use client"

import { useEffect, useState } from "react"

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sections[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0,
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  return activeSection
}

