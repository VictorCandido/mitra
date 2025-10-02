"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface MachineryItem {
  id: string
  name: string
  description: string
  images: string[]
}

const machineryData: MachineryItem[] = [
    {
        id: "escavadeira-hidraulica-grande",
        name: "Escavadeira Hidráulica Grande",
        description: "Equipamento versátil para escavação, demolição e movimentação de terra.",
        images: [
          "/escavadeira-grande/escavadeira-grande1.jpeg"
        ],
    },
    {
        id: "escavadeira-hidraulica-pequena",
        name: "Escavadeira Hidráulica Pequena",
        description: "Ideal para trabalhos em espaços reduzidos, a escavadeira hidráulica pequena oferece alta precisão e eficiência em escavações, demolições e movimentação de terra em obras urbanas e residenciais.",
        images: [
          "/escavadeira-pequena/escavadeira-pequena1.jpeg", 
          "/escavadeira-pequena/escavadeira-pequena2.jpeg", 
          "/escavadeira-pequena/escavadeira-pequena3.mp4"
        ],
    },
    {
        id: "retroescavadeira",
        name: "Retroescavadeira",
        description: "Máquina multifuncional ideal para obras de qualquer tamanho.",
        images: [
          "/retroescavadeira/retro1.jpeg", 
          "/retroescavadeira/retro2.jpeg", 
          "/retroescavadeira/retro3.mp4"
        ],
    },
    {
        id: "motoniveladora",
        name: "Motoniveladora",
        description: "Equipamento especializado em nivelamento e acabamento de superfícies.",
        images: [
          "/motoniveladora/motoniveladora1.jpeg"
        ],
    },
    {
        id: "caminhao-basculante",
        name: "Caminhão Basculante",
        description: "Veículo robusto para transporte de materiais de construção.",
        images: [
          "/caminhao-basculante/caminhao-basculante1.jpeg", 
          "/caminhao-basculante/caminhao-basculante2.jpeg", 
          "/caminhao-basculante/caminhao-basculante3.jpeg"
        ],
    },
    {
        id: "mini-carregadeira",
        name: "Mini Carregadeira de Pneus",
        description: "Equipamento ideal para carregamento e movimentação de materiais.",
        images: [
          "/mini-carregadeira/mini-carregadeira1.jpeg",
          "/mini-carregadeira/mini-carregadeira2.jpeg",
          "/mini-carregadeira/mini-carregadeira3.jpeg",
          "/mini-carregadeira/mini-carregadeira4.jpeg",
          "/mini-carregadeira/mini-carregadeira5.jpeg",
        ],
    },
]

function MachineryCarousel({ machinery }: { machinery: MachineryItem }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isVideo = (path: string) => /\.(mp4|webm|ogg)$/i.test(path)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % machinery.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + machinery.images.length) % machinery.images.length)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          {isVideo(machinery.images[currentImageIndex]) ? (
            <video
              key={machinery.images[currentImageIndex]}
              src={machinery.images[currentImageIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
            />
          ) : (
            <Image
              src={machinery.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${machinery.name} - Equipamento de terraplenagem em Itupeva-SP - Imagem ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-all duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          )}
          {machinery.images.length > 1 && (
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
                {machinery.images.map((_, index) => (
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
        <h3 className="text-xl font-bold mb-2">{machinery.name}</h3>
        <p className="text-muted-foreground mb-4">{machinery.description}</p>
      </CardContent>
    </Card>
  )
}

export function MachinerySection() {
  return (
    <section id="maquinarios" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 md:text-4xl lg:text-5xl">
            Nossos Maquinários
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos com uma frota moderna e bem mantida de equipamentos para atender todas as necessidades dos seus
            projetos de terraplenagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryData.map((machinery) => (
            <MachineryCarousel key={machinery.id} machinery={machinery} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Precisa de algum equipamento específico? Entre em contato conosco!
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contato")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  )
}
