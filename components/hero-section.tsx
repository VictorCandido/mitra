'use client';

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/capa.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            <p>Terraplenagem e Locações de Máquinas</p> 
          </h1>

          <p className="mb-8 text-lg text-gray-200 text-pretty md:text-xl lg:text-2xl">
            Bem-vindo à Mitra Terraplenagem e Locações! Somos especialistas em terraplenagem e locação de máquinas, oferecendo soluções completas para obras em Itupeva-SP e região. 
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => scrollToSection("contato")}>
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              onClick={() => scrollToSection("portfolio")}
            >
              Ver Nossos Projetos
            </Button> */}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-chart-4" />
              <span className="text-sm font-medium">Profissionais Qualificados</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-chart-4" />
              <span className="text-sm font-medium">15+ Anos de Experiência</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-chart-4" />
              <span className="text-sm font-medium">Equipamentos Modernos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
