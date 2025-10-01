"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "./ui/button"

interface ServiceItem {
  id: string
  title: string
  description: string
  images: string[]
}

const services: ServiceItem[] = [
  {
    id: 'aterros-escavacoes',
    title: "Aterros e Escavações",
    description: "Execução de aterros e escavações com precisão, garantindo a preparação ideal do terreno para fundações, nivelamento e obras estruturais.",
    images: [
      '/aterros-escavacoes/aterros-escavacoes1.mp4',
    ],
  },
  {
    id: 'fornecimento-de-materiais',
    title: "Fornecimento de Materiais",
    description: "Disponibilizamos materiais de alta qualidade para construção e terraplenagem, assegurando resistência, durabilidade e economia em sua obra.",
    images: [
      '/fornecimento-de-materiais/fornecimento-de-materiais1.jpeg',
      '/fornecimento-de-materiais/fornecimento-de-materiais2.jpeg',
    ],
  },
  {
    id: 'infraestrutura',
    title: "Infraestrutura",
    description: "Construção de bases sólidas de infraestrutura, incluindo drenagem, redes de utilidade e pavimentação, para obras seguras e de longa vida útil.",
    images: [
      '/infraestrutura/infraestrutura1.jpeg',
      '/infraestrutura/infraestrutura2.jpeg',
      '/infraestrutura/infraestrutura3.jpeg',
      '/infraestrutura/infraestrutura4.jpeg',
    ],
  },
  {
    id: 'locacao-de-maquinas',
    title: "Locação de Máquinas",
    description: "Locação de máquinas modernas, revisadas e operadas por profissionais qualificados, ideais para terraplenagem e serviços de construção.",
    images: [
      '/locacao-de-maquinas/locacao-de-maquinas1.jpeg',
      '/locacao-de-maquinas/locacao-de-maquinas2.jpeg',
      '/locacao-de-maquinas/locacao-de-maquinas3.jpeg',
      '/locacao-de-maquinas/locacao-de-maquinas4.jpeg',
      '/locacao-de-maquinas/locacao-de-maquinas5.jpeg',
      '/locacao-de-maquinas/locacao-de-maquinas6.jpeg',
      '/locacao-de-maquinas/locacao-de-maquinas7.jpeg',
      '/locacao-de-maquinas/locacao-de-maquinas8.jpeg',
    ],
  },
  {
    id: 'perfuracoes',
    title: "Perfurações",
    description: "Perfurações de solo com tecnologia e segurança, perfeitas para fundações, contenções e projetos de engenharia civil de diferentes portes.",
    images: [
      '/perfuracoes/perfuracoes1.jpeg',
      '/perfuracoes/perfuracoes2.mp4',
    ],
  },
  {
    id: 'platos',
    title: "Platôs",
    description: "Construção de platôs nivelados e estáveis, garantindo a base necessária para edificações, condomínios, galpões e áreas industriais.",
    images: [
      '/platos/platos1.mp4',
      '/platos/platos2.mp4',
    ],
  },
  {
    id: 'rompimento-demolicao',
    title: "Rompimento",
    description: "Demolição de casas, estruturas e pisos industriais.",
    images: [
      '/rompimento-demolicao/rompimento-demolicao1.jpeg',
      '/rompimento-demolicao/rompimento-demolicao2.jpeg',
      '/rompimento-demolicao/rompimento-demolicao3.mp4',
    ],
  },
  {
    id: 'comercio-de-maquinas',
    title: "Comércio de Máquinas",
    description: "Venda de máquinas para terraplenagem e construção civil, oferecendo equipamentos de confiança para aumentar a produtividade do seu projeto.",
    images: [
      '/comercio-de-maquinas/comercio-de-maquinas1.jpeg',
      '/comercio-de-maquinas/comercio-de-maquinas2.jpeg',
      '/comercio-de-maquinas/comercio-de-maquinas3.jpeg',
    ],
  },
]

function ServicesCarousel({ service }: { service: ServiceItem }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isVideo = (path: string) => /\.(mp4|webm|ogg)$/i.test(path)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          {isVideo(service.images[currentImageIndex]) ? (
            <video
              key={service.images[currentImageIndex]}
              src={service.images[currentImageIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
            />
          ) : (
            <Image
              src={service.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${service.title} - Serviço de terraplenagem em Itupeva-SP - Imagem ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-all duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          )}
          {service.images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                {service.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-primary" : "bg-background/60"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
      </CardContent>
    </Card>
  )
}

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 md:text-4xl lg:text-5xl">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Oferecemos soluções completas em terraplenagem com equipamentos modernos e equipe altamente qualificada para
            garantir a excelência em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServicesCarousel key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
