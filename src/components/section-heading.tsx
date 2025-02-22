"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SectionHeadingProps {
  icon: LucideIcon
  title: string
}

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
        <Icon className="h-8 w-8 text-primary relative" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </motion.div>
  )
}

