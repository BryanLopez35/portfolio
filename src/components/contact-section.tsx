"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@bryancode.dev",
    href: "mailto:hello@bryancode.dev",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 (664) 306-1520",
    href: "tel:+526643061520",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Tijuana, Baja California, Mexico",
    href: "",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background/5" />
      <div className="container px-4 mx-auto relative">
        <SectionHeading icon={Mail} title="Hablemos" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-background/50 border-primary/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        placeholder="Nombre"
                        className="bg-background/50 border-primary/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Apellido"
                        className="bg-background/50 border-primary/10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-background/50 border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Asunto"
                      className="bg-background/50 border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Mensaje"
                      className="min-h-[150px] bg-background/50 border-primary/10"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-background/50 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="font-medium group-hover:text-primary transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="overflow-hidden backdrop-blur-sm bg-background/50 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Disponibilidad Actual
                </h3>
                <p className="text-muted-foreground mb-4">
                  Actualmente estoy disponible para trabajos independientes. Si tienes un proyecto en mente, ¡estoy aquí para ayudarte!
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Disponible para nuevos proyectos
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
