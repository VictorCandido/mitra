import Image from "next/image"

export function BusinessCardSection() {
  return (
    <section id="contato-rapido" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fale diretamente conosco para orçamentos e informações
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-square md:aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/cartao-mitra.png"
              alt="Cartão de Visita MITRA - Terraplenagem e Locações"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="mt-8 text-center space-y-4">
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Contato Direto</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Responsável</p>
                  <p className="text-xl font-semibold">Marcelo</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                  <a
                    href="tel:+5511947627807"
                    className="text-xl font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    (11) 94762-7807
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a
                    href="mailto:mitraterraplenagem@gmail.com"
                    className="text-xl font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    mitraterraplenagem@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
