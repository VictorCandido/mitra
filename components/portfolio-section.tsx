import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Condomínio Residencial Alto Padrão",
    location: "São Paulo - SP",
    area: "15.000 m²",
    type: "Residencial",
    image: "/luxury-residential-construction-site-with-earthmov.jpg",
  },
  {
    title: "Centro Comercial Shopping Plaza",
    location: "Campinas - SP",
    area: "25.000 m²",
    type: "Comercial",
    image: "/commercial-construction-site-with-heavy-machinery.jpg",
  },
  {
    title: "Complexo Industrial Logístico",
    location: "Guarulhos - SP",
    area: "40.000 m²",
    type: "Industrial",
    image: "/industrial-construction-site-with-excavators-and-b.jpg",
  },
  {
    title: "Loteamento Residencial Verde",
    location: "Sorocaba - SP",
    area: "30.000 m²",
    type: "Loteamento",
    image: "/residential-development-construction-with-earth-mo.jpg",
  },
  {
    title: "Rodovia Estadual - Trecho Norte",
    location: "Interior - SP",
    area: "50.000 m²",
    type: "Infraestrutura",
    image: "/highway-construction-with-heavy-earthmoving-equipm.jpg",
  },
  {
    title: "Parque Empresarial Tech Hub",
    location: "Ribeirão Preto - SP",
    area: "20.000 m²",
    type: "Empresarial",
    image: "/business-park-construction-site-with-modern-equipm.jpg",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 md:text-4xl lg:text-5xl">
            Projetos que Transformaram Paisagens
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Conheça alguns dos nossos principais projetos executados com excelência e que demonstram nossa capacidade
            técnica e compromisso com a qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary">{project.type}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-balance">{project.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Localização:</span>
                    <span className="font-medium">{project.location}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Área trabalhada:</span>
                    <span className="font-medium">{project.area}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
