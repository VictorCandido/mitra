import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Building, Clock, Drill, Layout, Mountain, Truck, Warehouse } from "lucide-react"

const services = [
  {
    icon: Mountain,
    title: "Aterros e Escavações",
    description: "Venda de máquinas para terraplenagem e construção civil.",
  },
  {
    icon: Truck,
    title: "Comércio de Máquinas",
    description: "Venda de máquinas para terraplenagem e construção civil.",
  },
  {
    icon: Warehouse,
    title: "Fornecimento de Materiais",
    description: "Materiais de qualidade para obras de terraplenagem e construção.",
  },
  {
    icon: Building,
    title: "Infraestrutura",
    description: "Serviços de infraestrutura para obras seguras e duradouras.",
  },
  {
    icon: Clock,
    title: "Locações de Máquinas",
    description: "Locação de máquinas revisadas para terraplenagem e construção.",
  },
  {
    icon: Drill,
    title: "Perfurações",
    description: "Perfurações de solo precisas para fundações e projetos de engenharia.",
  },
  {
    icon: Layout,
    title: "Platôs",
    description: "Construção de platôs estáveis e nivelados para diferentes tipos de obra.",
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

        <Carousel className="hidden md:block">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full" key={index}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="grid grid-cols-1 md:hidden gap-6 ">
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
