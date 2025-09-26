import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Mendes",
    company: "Construtora Horizonte",
    role: "Diretor de Obras",
    content:
      "A Mitra executou a terraplenagem do nosso maior empreendimento com perfeição. Prazo cumprido e qualidade excepcional.",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    company: "Incorporadora Prime",
    role: "Gerente de Projetos",
    content:
      "Profissionalismo exemplar e equipamentos de última geração. Recomendo para qualquer projeto de grande porte.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    company: "Grupo Construir",
    role: "Engenheiro Civil",
    content: "Parceria de longa data. Sempre entregam com qualidade superior e dentro do cronograma estabelecido.",
    rating: 5,
  },
]

const clients = [
  {
    name: "MacLucer",
    logo: "/maclucer.png",
  },
  {
    name: "Incorporadora Prime",
    logo: "/incorporadora-prime-logo-empresa-imobili-ria.jpg",
  },
  {
    name: "Grupo Construir",
    logo: "/grupo-construir-logo-empresa-constru--o-civil.jpg",
  },
  {
    name: "Engenharia Total",
    logo: "/engenharia-total-logo-empresa-engenharia.jpg",
  },
  {
    name: "Obras & Cia",
    logo: "/obras-e-cia-logo-empresa-constru--o.jpg",
  },
  {
    name: "Construtora Moderna",
    logo: "/construtora-moderna-logo-empresa-constru--o.jpg",
  },
  {
    name: "Empreendimentos SP",
    logo: "/empreendimentos-sp-logo-empresa-imobili-ria.jpg",
  },
  {
    name: "Construções Elite",
    logo: "/constru--es-elite-logo-empresa-constru--o.jpg",
  },
]

export function ClientsSection() {
  return (
    <section id="clientes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 md:text-4xl lg:text-5xl">
            Clientes que Confiam em Nosso Trabalho
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Mais de 15 anos construindo relacionamentos sólidos com construtoras, incorporadoras e empresas que
            valorizam qualidade e pontualidade.
          </p>
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lista de Clientes */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Empresas Parceiras</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-lg border hover:shadow-md transition-shadow duration-300 min-h-[120px]"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`Logo ${client.name}`}
                  className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  width={160}
                  height={64}
                  style={{ width: "auto", height: "4rem" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
