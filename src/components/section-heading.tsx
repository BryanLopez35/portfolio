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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="relative mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-2xl" />
          <div className="absolute -inset-8 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-20 animate-spin-slow" />

          {/* Icon container */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-background via-muted to-background border border-primary/20 shadow-xl shadow-primary/5">
            <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-muted/50 via-background to-muted/50 backdrop-blur-xl" />
            <Icon className="relative w-10 h-10 text-primary" />
          </div>
        </motion.div>

        {/* Title with decorative elements */}
        <div className="relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute h-[1px] bottom-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute h-[2px] bottom-[-4px] left-[30%] bg-gradient-to-r from-primary to-secondary w-[40%]"
          />

          <h2 className="text-4xl md:text-5xl font-bold px-4 pb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {title}
            </span>
          </h2>
        </div>
      </div>
    </motion.div>
  )
}

