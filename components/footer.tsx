import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Image src="/mitra-logo.png" alt="Mitra" width={192} height={192} />
            <p className="text-sm text-primary-foreground/80 text-pretty">
              Especialistas em terraplenagem com mais de 15 anos de experiência, transformando terrenos em fundações
              perfeitas para seus projetos.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Aterros e Escavações</li>
              <li>Fornecimento de Materiais</li>
              <li>Infraestrutura</li>
              <li>Locações de Máquinas</li>
              <li>Perfurações</li>
              <li>Platôs</li>
              <li>Comércio de Máquinas</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Itupeva - SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 94762-7807</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>mitraterraplanagem@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <FaFacebook className="h-4 w-4" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <FaInstagram className="h-4 w-4" />
              </div>
              <a 
                href="https://wa.me/5511947627807?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20servi%C3%A7os%20de%20terraplenagem…" 
                target="blank" 
                className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors cursor-pointer"
              >
                <FaWhatsapp name="WhatsApp" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Mitra - Todos os direitos reservados. - Criado por: Vecso</p>
        </div>
      </div>
    </footer>
  )
}
