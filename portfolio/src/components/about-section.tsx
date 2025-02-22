"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, User, Timer } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
const timelineData = [
  {
    type: "experience",
    title: "Desarrollador de Software",
    company: "Grupo Optima",
    date: "2024 - Presente",
    description:
      "Desarrollador web y móvil con experiencia en PHP, JavaScript, Node.js y MySQL. Especialista en backend con Laravel y CodeIgniter, desarrollo frontend con React y aplicaciones móviles con React Native. Experiencia en ERP, CRM y gestión de WordPress",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "PHP",
      "Node.js",
      "JavaScript",
      "WordPress",
    ],
    achievements: [
      "Aumento de la productividad del equipo en un 40%",
      "Reducción de informes de errores en un 60%",
      "Implementación de pipeline CI/CD",
    ],
  },
  {
    type: "education",
    title: "Ingenieria en Tecnologias de Informacion y Comunicacion",
    company: "CUT Tijuana",
    date: "2023 - 2026",
    description:
      "Especializado en Ingeniería de Software con enfoque en Tecnologías Web y Desarrollo de Aplicaciones Móviles.",
    achievements: ["Mejor Proyecto Final"],
    skills: ["Algoritmos", "Estructuras de Datos", "Arquitectura de Software"],
  },
  {
    type: "experience",
    title: "Administrador de Sistemas",
    company: "Precision Plating S.A de C.V",
    date: "2021 - 2024",
    description:
      "Gestión de infraestructura informática, desarrollo de sistemas web y landing pages con PHP, JavaScript y MySQL. Liderazgo en proyectos ERP, control de versiones con GitHub y mejora continua de procesos.",
    skills: ["PHP", "JavaScript", "Node.js", "MySQL", "Laravel", "CodeIgniter"],
    achievements: [
      "Desarrollo de sistemas clave",
      "Mejora del rendimiento de la aplicación en un 30%",
    ],
  },
  {
    type: "education",
    title: "Curso de Ciberseguridad",
    company: "SysAdmin México",
    date: "2023",
    description:
      "Conocimiento de los principios fundamentales de ciberseguridad, incluyendo la norma ISO/IEC 27032, implementación, gestión de riesgos y fortalecimiento de un marco integral de ciberseguridad.",
    achievements: ["Certificado de Ciberseguridad"],
    skills: [
      "ISO/IEC 27032",
      "Gestión de Riesgos",
      "Fortalecimiento de Ciberseguridad",
    ],
  },
];

const stats = [
  {
    title: "Años de Experiencia",
    value: "5+",
    icon: Timer,
  },
  {
    title: "Proyectos Completados",
    value: "50+",
    icon: Briefcase,
  },
  {
    title: "",
    value: "",
    icon: Award,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionHeading icon={User} title="Sobre mi" />

        {/* Bio Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full backdrop-blur-sm bg-background/50 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Mi camino</h3>
                <p className="text-muted-foreground mb-4">
                  Soy un desarrollador apasionado de Full Stack con más de 5
                  años de experiencia en la construcción de aplicaciones web
                  modernas. Mi viaje en la tecnología comenzó con una profunda
                  curiosidad sobre cómo funcionan las cosas en la web, lo que me
                  llevó a seguir una educación formal en Ciencias de la
                  Computación.
                </p>
                <p className="text-muted-foreground mb-4">
                  A lo largo de mi carrera, he tenido la oportunidad de trabajar
                  con diversos equipos y tecnologías, siempre estando a la
                  vanguardia de las tendencias de desarrollo web y las mejores
                  prácticas.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Resolución de problemas",
                    "Liderazgo de equipos",
                    "Código Limpio",
                    "Metodología Ágil",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/5 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full backdrop-blur-sm bg-background/50 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Estadísticas Rápidas
                </h3>
                <div className="space-y-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="p-2 rounded-full bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">
                            {stat.title}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : ""}`}
                >
                  <Card className="relative group">
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity" />
                    <CardContent className="p-6 backdrop-blur-sm bg-background/50">
                      <div className="flex items-center gap-2 mb-2">
                        {item.type === "education" ? (
                          <GraduationCap className="h-5 w-5 text-primary" />
                        ) : (
                          <Briefcase className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-sm text-primary">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-primary/5 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden lg:block w-4 h-4 rounded-full bg-primary relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
