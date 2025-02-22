"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { useActiveSection } from "@/lib/hooks"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleCanvas } from "@/components/particle-canvas"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { cn } from "@/lib/utils"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const MENU_ITEMS = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre mi" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contáctame" },
]

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [isDark, setIsDark] = useState(false)
  const activeSection = useActiveSection(MENU_ITEMS.map((item) => item.id))

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/50 dark:from-gray-950 dark:to-gray-900 cursor-none">
      <CustomCursor />
      <ParticleCanvas />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50"
        style={{ scaleX }}
      />

      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border z-50"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.button>

      {/* Navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="hidden md:block bg-background/50 backdrop-blur-lg border border-primary/10 rounded-full p-2">
          <nav className="flex items-center gap-2">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors relative",
                  activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <nav className="flex flex-col gap-2">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleScroll(item.id)
                    }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Hero Section */}
      {/* ... (mantén la sección Hero como estaba en la versión 4) ... */}

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

