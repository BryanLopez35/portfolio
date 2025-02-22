"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/BryanLopez35",
    label: "GitHub",
    target: "_blank",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bryan-lopez-hdz/",
    label: "LinkedIn",
    target: "_blank",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/drag0.97/",
    label: "Instagram",
    target: "_blank",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="relative z-10 container px-4 mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="mb-8 rounded-full overflow-hidden w-40 h-40 mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-spin-slow" />
          <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
            <Image
              src="/images/Bryan Lopez.webp"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg md:text-xl text-muted-foreground">
              Hola, soy
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/50 to-secondary">
              Bryan Lopez
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              Un apasionado{" "}
              <span className="text-primary font-semibold">
                Desarrollador Fullstack
              </span>{" "}
              creando hermosas experiencias digitales.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Charlemos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 bg-background/50 backdrop-blur-sm"
            >
              <a href="@/documents/CV_Bryan_Lopez.pdf" download>
                Descargar CV
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target={social.target}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                <Button
                  variant="outline"
                  size="icon"
                  className="relative bg-background/50 backdrop-blur-sm border-primary/20"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Cónoceme</span>
          <div className="p-2 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20">
            <ChevronDown className="h-4 w-4 text-primary animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
