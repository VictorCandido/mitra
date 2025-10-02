import { BusinessCardSection } from "@/components/business-card-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MachinerySection } from "@/components/machinery-section"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BusinessCardSection />
      <ServicesSection />
      <MachinerySection />
      {/* <PortfolioSection /> */}
      {/* <ClientsSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
