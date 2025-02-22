import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 bg-background text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
          Hecho con amor <Heart className="h-4 w-4 text-red-500" /> usando
          Next.js, TypeScript y Tailwind
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          &copy; {new Date().getFullYear()} Bryan Lopez. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
