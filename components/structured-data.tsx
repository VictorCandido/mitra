export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Terraplenagem Mitra",
    "description": "Especialistas em terraplenagem e locação de máquinas em Itupeva-SP. Aterros, escavações, infraestrutura e equipamentos modernos.",
    "url": "https://terraplenagemmitra.com.br",
    "telephone": "+55-11-94762-7807",
    "email": "mitraterraplanagem@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Itupeva",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.1525",
      "longitude": "-47.0586"
    },
    "openingHours": "Mo-Fr 07:00-17:00",
    "priceRange": "$$",
    "image": "https://terraplenagemmitra.com.br/capa.jpeg",
    "logo": "https://terraplenagemmitra.com.br/mitra-logo.png",
    "sameAs": [
      "https://wa.me/5511947627807"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Terraplenagem",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aterros e Escavações",
            "description": "Preparação de terrenos com aterros e escavações para fundações e obras."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Locações de Máquinas",
            "description": "Locação de máquinas revisadas para terraplenagem e construção."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infraestrutura",
            "description": "Serviços de infraestrutura para obras seguras e duradouras."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fornecimento de Materiais",
            "description": "Materiais de qualidade para obras de terraplenagem e construção."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
