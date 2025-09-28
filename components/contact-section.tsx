import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "./contact-form"
import MapSection from "./map-section"

export function ContactSection() {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-balance mb-4 md:text-4xl lg:text-5xl">Entre em Contato Conosco</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Pronto para iniciar seu projeto? Nossa equipe está disponível para oferecer a melhor solução em
            terraplenagem para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <ContactForm />

          {/* Informações de Contato */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
            <Card>
              <CardContent className="p-6 h-full">
                <div className="flex items-center space-x-4 h-full">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Itupeva - SP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 h-full">
                <div className="flex items-center space-x-4 h-full">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefones</h3>
                    <p className="text-muted-foreground">
                      (11) 94762-7807 - WhatsApp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 h-full">
                <div className="flex items-center space-x-4 h-full">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground">
                      mitraterraplanagem@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 h-full">
                <div className="flex items-center space-x-4 h-full">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 7h às 17h
                      <br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12">
          <Card>
            <CardContent className="h-72">
              <MapSection />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
