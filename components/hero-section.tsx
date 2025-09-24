import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/construction-site-with-heavy-machinery-and-earthmo.jpg')`,
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
            Transformamos seu terreno em <span className="text-accent">fundação perfeita</span>
          </h1>

          <p className="mb-8 text-lg text-gray-200 text-pretty md:text-xl lg:text-2xl">
            Especialistas em terraplenagem com mais de 15 anos de experiência. Preparamos seu terreno com precisão,
            segurança e agilidade para qualquer tipo de construção.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Ver Nossos Projetos
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">+500 Projetos Concluídos</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">15+ Anos de Experiência</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Equipamentos Modernos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
