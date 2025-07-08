import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Info } from "lucide-react"

const pricingCategories = [
  {
    title: "Wulkanizacja",
    description: "Naprawa i serwis opon",
    services: [
      { name: "Naprawa przebicia opony osobowej", price: "od 30 zł" },
      { name: "Naprawa przebicia opony ciężarowej", price: "od 80 zł" },
      { name: "Wulkanizacja na gorąco", price: "od 120 zł" },
      { name: "Naprawa bocznej ściany", price: "od 150 zł" },
    ],
  },
  {
    title: "Serwis opon",
    description: "Montaż, demontaż i wyważanie",
    services: [
      { name: "Montaż/demontaż opony osobowej", price: "od 25 zł" },
      { name: "Montaż/demontaż opony ciężarowej", price: "od 60 zł" },
      { name: "Wyważanie koła", price: "od 20 zł" },
      { name: "Kontrola ciśnienia (kompleksowa)", price: "od 40 zł" },
    ],
  },
  {
    title: "Pomoc drogowa",
    description: "Usługi awaryjne 24/7",
    services: [
      { name: "Dojazd w promieniu 10 km", price: "od 100 zł" },
      { name: "Dojazd w promieniu 20 km", price: "od 150 zł" },
      { name: "Dojazd w promieniu 50 km", price: "od 250 zł" },
      { name: "Pomoc nocna/świąteczna", price: "+50% do ceny" },
    ],
  },
  {
    title: "Holowanie",
    description: "Transport pojazdów",
    services: [
      { name: "Holowanie do 10 km", price: "od 200 zł" },
      { name: "Holowanie do 20 km", price: "od 300 zł" },
      { name: "Holowanie do 50 km", price: "od 500 zł" },
      { name: "Holowanie pojazdów ciężkich", price: "wycena indywidualna" },
    ],
  },
  {
    title: "Maszyny rolnicze",
    description: "Serwis sprzętu rolniczego",
    services: [
      { name: "Naprawa opony ciągnika", price: "od 120 zł" },
      { name: "Wymiana opony kombajnu", price: "od 200 zł" },
      { name: "Serwis opon maszyn budowlanych", price: "od 150 zł" },
      { name: "Dojazd do gospodarstwa", price: "od 80 zł" },
    ],
  },
  {
    title: "Sprzedaż",
    description: "Opony i felgi",
    services: [
      { name: "Opony ciężarowe (nowe)", price: "od 800 zł" },
      { name: "Opony rolnicze (nowe)", price: "od 600 zł" },
      { name: "Felgi stalowe", price: "od 200 zł" },
      { name: "Felgi aluminiowe", price: "od 400 zł" },
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500">Cennik</span> usług
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Przejrzyste ceny naszych usług. Wszystkie ceny są orientacyjne i mogą się różnić w zależności od stopnia
            skomplikowania pracy.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">Ważne informacje</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Podane ceny są orientacyjne i mogą się różnić w zależności od rodzaju usługi</li>
                <li>• Dokładna wycena jest ustalana po oględzinach</li>
                <li>• Ceny zawierają dojazd w promieniu 10 km od Goszczy</li>
                <li>• Za dojazd powyżej 10 km doliczamy koszt dojazdu</li>
                <li>• Usługi nocne (22:00-6:00) i świąteczne: +50% do ceny</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 h-full">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                    >
                      <span className="text-gray-300 text-sm">{service.name}</span>
                      <span className="text-yellow-500 font-semibold text-sm">{service.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gray-800 rounded-lg p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Oferty <span className="text-yellow-500">specjalne</span>
            </h2>
            <p className="text-gray-400 text-lg">Skorzystaj z naszych promocyjnych pakietów usług</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-700 border-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Pakiet Firmowy</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Stała obsługa floty pojazdów
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Rabat 15% na wszystkie usługi
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Priorytetowy dojazd
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Bezpłatne kontrole okresowe
                  </li>
                </ul>
                <p className="text-yellow-500 font-bold text-lg">Wycena indywidualna</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Pakiet Rolniczy</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Obsługa maszyn rolniczych
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Rabat 10% w sezonie
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Dojazd do gospodarstwa
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                    Serwis w okresie żniw 24/7
                  </li>
                </ul>
                <p className="text-yellow-500 font-bold text-lg">Wycena indywidualna</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-800 rounded-lg p-8 mb-20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Formy <span className="text-yellow-500">płatności</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-700 rounded-lg p-4">
              <span className="text-white font-medium">Gotówka</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <span className="text-white font-medium">Karta płatnicza</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <span className="text-white font-medium">Przelew</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <span className="text-white font-medium">Faktura VAT</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-black mb-4">Potrzebujesz wyceny?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby otrzymać dokładną wycenę dostosowaną do Twoich potrzeb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6">
              <a href="tel:+48123456789">
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń: +48 123 456 789
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 bg-transparent"
            >
              <a href="mailto:serwistruckmaster@gmail.com">Napisz e-mail</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
