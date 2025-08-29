"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Navigating to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false) // Tutup hamburger menu setelah klik
  }

  return (
    <header className="bg-card border-b border-border fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-header-ztfihwVDknWo8FlkQE0KNMoxcnLV65.png"
              alt="Kacang Bawang Ibu Rus Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              <span className="text-blue-600" style={{ WebkitTextStroke: "0.3px white" }}>
                Kacang Bawang
              </span>{" "}
              <span className="text-red-600" style={{ WebkitTextStroke: "0.3px white" }}>
                Ibu Rus
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">Cemilane Wong Reang Selalu Bikin Ketagihan</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("beranda")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Beranda
          </button>
          <button
            onClick={() => scrollToSection("tentang")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Tentang
          </button>
          <button
            onClick={() => scrollToSection("produk")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Produk
          </button>
          <button
            onClick={() => scrollToSection("galeri")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Galeri
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Kontak
          </button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-4">
              {["beranda", "tentang", "produk", "galeri", "kontak"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 border-b border-border hover:bg-accent/50 rounded-md"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
