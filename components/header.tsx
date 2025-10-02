"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    closeMobileMenu()
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 max-w-screen items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <Image src="/mitra-logo.png" alt="Mitra" width={192} height={192} />

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => scrollToSection("inicio")} className="transition-colors hover:text-primary">
              Início
            </button>
            <button onClick={() => scrollToSection("servicos")} className="transition-colors hover:text-primary">
              Serviços
            </button>
            <button onClick={() => scrollToSection("maquinarios")} className="transition-colors hover:text-primary">
              Maquinários
            </button>
            {/* <button onClick={() => scrollToSection("portfolio")} className="transition-colors hover:text-primary">
              Portfólio
            </button> */}
            <button onClick={() => scrollToSection("contato")} className="transition-colors hover:text-primary">
              Contato
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(11) 94762-7807</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>mitraterraplanagem@gmail.com</span>
            </div>
          </div>
          <Button size="sm" className="hidden md:inline-flex" onClick={() => scrollToSection("contato")}>
            Solicitar Orçamento
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={closeMobileMenu} />

          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border/40 z-40 md:hidden">
            <nav className="container px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block py-2 text-lg font-medium transition-colors hover:text-primary w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block py-2 text-lg font-medium transition-colors hover:text-primary w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("maquinarios")}
                className="block py-2 text-lg font-medium transition-colors hover:text-primary w-full text-left"
              >
                Maquinários
              </button>
              {/* <button
                onClick={() => scrollToSection("portfolio")}
                className="block py-2 text-lg font-medium transition-colors hover:text-primary w-full text-left"
              >
                Portfólio
              </button> */}
              <button
                onClick={() => scrollToSection("contato")}
                className="block py-2 text-lg font-medium transition-colors hover:text-primary w-full text-left"
              >
                Contato
              </button>

              {/* Mobile contact info */}
              <div className="pt-4 border-t border-border/40 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>(11) 94762-7807</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>mitraterraplanagem@gmail.com</span>
                </div>
                <Button className="w-full mt-4" onClick={() => scrollToSection("contato")}>
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
