import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
                <span className="text-sm font-bold text-accent-foreground">MT</span>
              </div>
              <span className="text-xl font-bold">Mitra</span>
            </div>
            <p className="text-sm text-primary-foreground/80 text-pretty">
              Especialistas em terraplenagem com mais de 15 anos de experiência, transformando terrenos em fundações
              perfeitas para seus projetos.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Terraplenagem Completa</li>
              <li>Movimentação de Terra</li>
              <li>Preparação de Terrenos</li>
              <li>Contenção de Encostas</li>
              <li>Drenagem e Pavimentação</li>
              <li>Consultoria Técnica</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@Mitra.com.br</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Mitra - Todos os direitos reservados. CNPJ: 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  )
}
