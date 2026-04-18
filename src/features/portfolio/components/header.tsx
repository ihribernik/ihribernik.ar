"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { portfolio } from "@/features/portfolio/data/portfolio";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { hero, navigation } = portfolio;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="text-xl font-bold">
          {hero.name}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="mt-6 flex flex-col gap-4 text-sm">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  onClick={() => setOpen(false)}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
