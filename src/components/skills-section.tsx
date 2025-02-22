"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Layout,
  Database,
  Terminal,
  Lightbulb,
  Puzzle,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const skillCategories = [
  {
    title: "Desarrollo Frontend",
    icon: Layout,
    skills: [
      { name: "React (Next.js)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    title: "Desarrollo Backend",
    icon: Database,
    skills: [
      { name: "Node.js & REST APIs", level: 85 }, // Combinado
      { name: "Python", level: 80 },
      { name: "PHP", level: 90 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Herramientas de Desarrollo",
    icon: Terminal,
    skills: [
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    title: "Habilidades Personales",
    icon: Puzzle,
    skills: [
      { name: "Comunicación", level: 85 },
      { name: "Resolución de Problemas", level: 90 },
      { name: "Creatividad", level: 85 },
      { name: "Gestión del Tiempo", level: 90 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/5" />
      <div className="container px-4 mx-auto relative">
        <SectionHeading icon={Code2} title="Competencias y experiencia" />

        {/* Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="backdrop-blur-sm bg-background/50 border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Competencia Técnica</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Con experiencia tanto en frontend como en desarrollo de backend,
                aporto una comprensión completa del stack completo de desarrollo
                web. Mi enfoque está en crear aplicaciones escalables, de alto
                rendimiento y fáciles de usar utilizando tecnologías modernas y
                las mejores prácticas.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "PHP",
                  "Java",
                  "MySQL",
                  "Tailwind CSS",
                  "JavaScript",
                  "Node.js",
                  "Python",
                  "REST APIs",
                  "Git",
                  "CI/CD",
                  "Linux",
                  "Agile",
                  "Performance",
                  "SEO",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/5 text-primary border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity" />
                <Card className="h-full backdrop-blur-sm bg-background/50 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-primary">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-secondary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
