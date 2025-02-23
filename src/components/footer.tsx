import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 bg-background text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
          Hecho con <Heart className="h-4 w-4 text-red-500" /> usando{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            TypeScript
          </a>{" "}
          y{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Tailwind CSS
          </a>
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          &copy; {new Date().getFullYear()} Bryan Lopez. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
