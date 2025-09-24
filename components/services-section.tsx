import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Mountain, Wrench, Shield, Clock, Award } from "lucide-react"

const services = [
  {
    icon: Mountain,
    title: "Terraplenagem Completa",
    description: "Nivelamento, corte e aterro de terrenos para preparação de fundações e construções.",
  },
  {
    icon: Truck,
    title: "Movimentação de Terra",
    description: "Transporte e remoção de terra com equipamentos de última geração e equipe especializada.",
  },
  {
    icon: Wrench,
    title: "Preparação de Terrenos",
    description: "Limpeza, desmatamento e preparação completa do terreno para início das obras.",
  },
  {
    icon: Shield,
    title: "Contenção de Encostas",
    description: "Soluções em contenção e estabilização de taludes para máxima segurança.",
  },
  {
    icon: Clock,
    title: "Drenagem e Pavimentação",
    description: "Sistemas de drenagem e pavimentação para acesso e escoamento adequado.",
  },
  {
    icon: Award,
    title: "Consultoria Técnica",
    description: "Análise técnica do terreno e consultoria especializada para seu projeto.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 md:text-4xl lg:text-5xl">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Oferecemos soluções completas em terraplenagem com equipamentos modernos e equipe altamente qualificada para
            garantir a excelência em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
