import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Truck, Clock, Car, Tractor, ShoppingCart, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Wulkanizacja",
    description: "Profesjonalna naprawa opon na miejscu awarii",
    features: [
      "Naprawa przebić i uszkodzeń",
      "Wulkanizacja na gorąco i zimno",
      "Naprawa opon ciężarowych",
      "Serwis 24/7",
    ],
  },
  {
    icon: Truck,
    title: "Mobilny serwis opon",
    description: "Kompleksowy serwis opon w Twojej lokalizacji",
    features: ["Montaż i demontaż opon", "Wyważanie kół", "Kontrola ciśnienia", "Doradztwo techniczne"],
  },
  {
    icon: Clock,
    title: "Pomoc drogowa 24/7",
    description: "Całodobowa pomoc w sytuacjach awaryjnych",
    features: [
      "Szybka reakcja na wezwanie",
      "Pomoc przy awarii opon",
      "Serwis na miejscu zdarzenia",
      "Dostępność przez całą dobę",
    ],
  },
  {
    icon: Car,
    title: "Holowanie",
    description: "Profesjonalne usługi holowania pojazdów",
    features: [
      "Holowanie pojazdów ciężarowych",
      "Transport maszyn rolniczych",
      "Bezpieczne przewożenie",
      "Nowoczesny sprzęt",
    ],
  },
  {
    icon: Tractor,
    title: "Serwis sprzętu rolniczego",
    description: "Specjalistyczny serwis maszyn rolniczych",
    features: ["Naprawa opon rolniczych", "Serwis ciągników", "Maszyny żniwne", "Sprzęt budowlany"],
  },
  {
    icon: ShoppingCart,
    title: "Sklep z oponami i felgami",
    description: "Sprzedaż nowych opon i felg",
    features: ["Opony ciężarowe", "Opony rolnicze", "Felgi stalowe i aluminiowe", "Doradztwo przy wyborze"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nasze <span className="text-yellow-500">usługi</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferujemy kompleksowe usługi serwisowe dla pojazdów ciężarowych, maszyn rolniczych i sprzętu budowlanego.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all duration-300 group h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-400 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Service Areas */}
        <div className="bg-gray-800 rounded-lg p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Obszar <span className="text-yellow-500">działania</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Obsługujemy Goszczę i okoliczne miejscowości w promieniu kilkudziesięciu kilometrów
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Województwo Małopolskie",
              "Województwo Śląskie",
              "Województwo Świętokrzyskie",
            ].map((city, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4">
                <span className="text-white font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-black mb-4">Potrzebujesz naszych usług?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami już teraz. Jesteśmy dostępni 24 godziny na dobę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6">
              <a href="tel:+48730139777">
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń: +48 730 139 777
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/kontakt">Skontaktuj się</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
