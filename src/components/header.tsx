"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/" className="text-xl font-bold">
          Claudio Ivan Hribernik
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#tecnologias"
            className="hover:text-primary transition-colors"
          >
            Tecnologías
          </a>
          <a
            href="#experiencia"
            className="hover:text-primary transition-colors"
          >
            Experiencia
          </a>
          <a href="#contacto" className="hover:text-primary transition-colors">
            Contacto
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="mt-6 flex flex-col gap-4 text-sm">
              <a
                onClick={() => setOpen(false)}
                href="#tecnologias"
                className="hover:text-primary transition-colors"
              >
                Tecnologías
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#experiencia"
                className="hover:text-primary transition-colors"
              >
                Experiencia
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#contacto"
                className="hover:text-primary transition-colors"
              >
                Contacto
              </a>
              <ThemeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
