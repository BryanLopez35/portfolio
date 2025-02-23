"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  ExternalLink,
  DownloadCloud
} from "lucide-react";
import { NeuralPattern } from "@/components/neural-pattern";

const socialLinks = [
  {
    icon: Github,
    href: "#",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Neural pattern background */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <NeuralPattern />
        </div>

        {/* Light mode specific background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.07] via-secondary/[0.05] to-accent/[0.07] dark:opacity-0" />

        {/* Dark mode specific background */}
        <div className="absolute inset-0 dark:bg-gradient-to-tr dark:from-primary/20 dark:via-transparent dark:to-secondary/20 opacity-0 dark:opacity-100" />

        {/* Animated shapes - Light mode */}
        <div className="absolute inset-0 dark:opacity-0">
          <motion.div
            className="absolute left-1/4 top-1/4 w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-accent/[0.03] rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated shapes - Dark mode */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100">
          <motion.div
            className="absolute left-1/4 top-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponible para nuevos proyectos
              </div>

              <div>
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="block">Bryan Lopez</span>
                  <span className="gradient-text">Full Stack Developer</span>
                </motion.h1>
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Creación de experiencias digitales con tecnologías modernas y
                  soluciones creativas. Convertir ideas en elegantes,
                  funcionales realidades.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary via-accent to-secondary text-white hover:opacity-90 transition-opacity"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contáctame
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="glass-effect">
                  <a href="documents/CV_Bryan_Lopez.pdf" download>
                    Descargar CV
                  </a>
                  <DownloadCloud className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                      <Button
                        variant="outline"
                        size="icon"
                        className="relative glass-effect"
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-last order-first"
          >
            <div className="relative mx-auto max-w-md">
              {/* Background decorative elements */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/50 via-accent/50 to-secondary/50 blur-2xl opacity-20" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-20" />

              {/* Main container */}
              <div className="relative glass-effect rounded-2xl p-4">
                {/* Geometric decorative elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24">
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/40 to-accent/40 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/40 to-secondary/40 blur-xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [0, -90, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_85%)]" />
                </div>

                {/* Content container */}
                <div className="relative">
                  {/* Image wrapper */}
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-background via-muted to-background p-2">
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                      {/* Animated gradient border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-30 animate-spin-slow" />

                      {/* Image container*/}
                      <div className="absolute inset-1 rounded-lg overflow-hidden bg-background/80 backdrop-blur-sm">
                        <img
                          src="/videos/EmojiMovie761983529-unscreen.gif"
                          className="w-full h-full object-cover"
                          alt="Animated GIF"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="absolute -right-12 top-8 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="glass-effect rounded-xl p-4 backdrop-blur-md border border-primary/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 8,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent"
                          />
                        </div>
                        <div>
                          <div className="text-2xl font-bold gradient-text">
                            5+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Años de Experiencia
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="glass-effect rounded-xl p-4 backdrop-blur-md border border-secondary/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            className="w-6 h-6 rounded-lg bg-gradient-to-tr from-secondary to-accent"
                          />
                        </div>
                        <div>
                          <div className="text-2xl font-bold gradient-text">
                            50+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Proyectos Realizados
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="glass-effect rounded-xl p-4 backdrop-blur-md border border-accent/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <motion.div
                            animate={{
                              scale: [1, 0.8, 1],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            className="w-6 h-6 bg-gradient-to-br from-accent to-primary transform rotate-45"
                          />
                        </div>
                        <div>
                          <div className="text-2xl font-bold gradient-text">
                            15+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Tecnologías
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative elements - left side */}
                  <div className="absolute -left-12 space-y-4 top-1/4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="glass-effect p-3 rounded-xl backdrop-blur-md border border-primary/20"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary/40 to-accent/40"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="glass-effect p-3 rounded-xl backdrop-blur-md border border-secondary/20"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          borderRadius: ["20%", "50%", "20%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="w-8 h-8 bg-gradient-to-br from-secondary/40 to-accent/40"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="cursor-pointer"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-sm text-muted-foreground">Conóceme</span>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
              <div className="relative p-3 rounded-full glass-effect">
                <ChevronDown className="h-4 w-4 text-primary animate-bounce" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
