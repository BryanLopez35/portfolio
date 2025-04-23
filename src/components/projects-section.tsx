"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Github, Globe } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";
import Image from "next/image";

const allProjects = [
  {
    title: "Optima Seminuevos",
    description: "Sitio web para Optima Seminuevos, división de Grupo Optima, empresa automotriz representante de KIA y HONDA en Baja California. Incluye integración con API REST para consulta de inventario y cotizaciones, búsqueda inteligente, soporte para temas claro/oscuro y un bot con inteligencia artificial para atención al usuario.", 
    image: "/images/optima_seminuevos.webp",
    tags: ["Next Js", "TypeScript", "Tailwind", "API REST", "CSS", "HTML", "Responsive", "SEO", "Dark Mode"],
    category: "Desarrollo Web",
    links: {
      demo: "https://optima-seminuevos-v2.vercel.app/",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "APP Control de Gastos",
    description: "Aplicación móvil para llevar el control de gastos empresariales",
    image: "/images/appgastos.webp",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    category: "Desarrollo Móvil",
    links: {
      demo: "",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "CRM CDK Group",
    description: "Sistema de gestion y análisis de datos",
    image: "/images/cdk.webp",
    tags: ["CodeIgniter", "PHP", "JavaScript", "MySQL", "CSS", "HTML"],
    category: "Software a la Medida",
    links: {
      demo: "",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "Dental Nakeji",
    description: "Clínica dental en Tijuana",
    image: "/images/nakeji.webp",
    tags: ["Wordpress", "PHP", "JavaScript", "MySQL", "CSS", "HTML"],
    category: "Desarrollo Web",
    links: {
      demo: "http://nakejidental.com/",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "JK Medios (Migración)",
    description: "Empresa de publicidad en medios exteriores. Desarrollo actual en una nueva versión con Next.js para mejorar rendimiento, escalabilidad y experiencia de usuario.",
    image: "/images/JK MEDIOS.webp",
    tags: ["Next Js", "TypeScript", "Tailwind", "CSS", "HTML", "Responsive", "SEO", "Dark Mode"],
    category: "Desarrollo Web",
    links: {
      demo: "https://jkmedios-v2.vercel.app/",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "CRM GSC Terra",
    description: "Sistema de gestion empresarial, con modulos de inventario, ventas, compras, contabilidad, clientes, proveedores, etc.",
    image: "/images/gscterra.webp",
    tags: ["Laravel", "PHP", "JavaScript", "MySQL", "CSS", "HTML"],
    category: "Software a la Medida",
    links: {
      demo: "",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "New Life Hospital",
    description: "Hospital de especialidades bariátricas",
    image: "/images/newlife.webp",
    tags: ["Wordpress", "PHP", "JavaScript", "MySQL", "CSS", "HTML"],
    category: "Desarrollo Web",
    links: {
      demo: "https://newlifehospitaltijuana.com/",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "Luminous Dental Las Vegas",
    description: "Clínica dental en Las Vegas",
    image: "/images/luminous.webp",
    tags: ["Wordpress", "PHP", "JavaScript", "MySQL", "CSS", "HTML"],
    category: "Desarrollo Web",
    links: {
      demo: "https://luminousdentallv.com/",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
  {
    title: "JK Medios",
    description: "Empresa de publicidad en medios exteriores",
    image: "/images/jkmedios.webp",
    tags: ["Wordpress", "PHP", "JavaScript", "MySQL", "CSS", "HTML"],
    category: "Desarrollo Web",
    links: {
      demo: "https://jkmedios.com/",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },
 
  /*{
    title: "Dental Assessors Group",
    description: "Grupo de especialistas en odontología",
    image: "/images/dentalassessorstj.webp",
    tags: ["Wordpress", "PHP", "JavaScript", "MySQL", "CSS", "HTML"],
    category: "Desarrollo Web",
    links: {
      demo: "https://dentalassessorstj.com/",
      code: "",
    },
    stats: [
      { label: "", value: "" },
      { label: "", value: "" },
    ],
  },*/
];

const categories = [
  "Todos",
  "Desarrollo Web",
  "Desarrollo Móvil",
  "Software a la Medida",
];

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <SectionHeading icon={Laptop} title="Proyectos" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "flex-1 sm:flex-none",
                selectedCategory === category
                  ? "text-white"
                  : "text-black dark:text-white"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden h-full backdrop-blur-sm bg-background/50 border-primary/10">
                <div className="aspect-video relative group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.links.demo && (
                      <Button
                        size="sm"
                        className="bg-white/10 hover:bg-white/20 text-white"
                        onClick={() =>
                          window.open(project.links.demo, "_blank")
                        }
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Demo en Vivo
                      </Button>
                    )}
                    {project.links.code && (
                      <Button
                        size="sm"
                        className="bg-white/10 hover:bg-white/20 text-white"
                        onClick={() =>
                          window.open(project.links.code, "_blank")
                        }
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Mirar Código
                      </Button>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 bg-background/50 backdrop-blur-sm text-black dark:text-white"
              onClick={loadMoreProjects}
            >
              <Github className="h-5 w-5 mr-2" />
              Mostrar más proyectos
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
