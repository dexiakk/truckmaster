import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Wrench, Truck, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/main-background.jpg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                <span className="text-yellow-500">Truck</span> Master
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Wulkanizacja | Mobilny Serwis Opon | Pomoc Drogowa 24/7
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Profesjonalny mobilny serwis opon dla ciężarówek i maszyn rolniczych. Działamy całodobowo w województwie Małopolskim, Śląskim, Świętokrzyskim i
              okolicach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6">
                <a href="tel:+48123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/uslugi">Nasze usługi</Link>
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5 text-yellow-500" />
                <a href="tel:+48123456789" className="hover:text-yellow-500 transition-colors">
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5 text-yellow-500" />
                <a href="mailto:serwistruckmaster@gmail.com" className="hover:text-yellow-500 transition-colors">
                  serwistruckmaster@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span>Goszcza, Małopolska</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nasze główne <span className="text-yellow-500">usługi</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oferujemy kompleksowe usługi serwisowe dla pojazdów ciężarowych i maszyn rolniczych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Wulkanizacja</h3>
                <p className="text-gray-400 mb-6">
                  Profesjonalna naprawa i wymiana opon dla ciężarówek. Mobilny serwis na miejscu awarii.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                >
                  <Link href="/uslugi">Dowiedz się więcej</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Serwis Opon</h3>
                <p className="text-gray-400 mb-6">
                  Kompleksowy serwis opon - montaż, demontaż, wyważanie i sprzedaż nowych opon.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                >
                  <Link href="/uslugi">Dowiedz się więcej</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Pomoc Drogowa 24/7</h3>
                <p className="text-gray-400 mb-6">
                  Całodobowa pomoc drogowa, holowanie i serwis awaryjny. Zawsze gotowi do pomocy.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                >
                  <Link href="/uslugi">Dowiedz się więcej</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Dlaczego <span className="text-yellow-500">Truck Master</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7</h3>
                <p className="text-gray-400 text-sm">Całodobowa dostępność</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Mobilność</h3>
                <p className="text-gray-400 text-sm">Dojeżdżamy do Ciebie</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Jakość</h3>
                <p className="text-gray-400 text-sm">Profesjonalne usługi</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lokalnie</h3>
                <p className="text-gray-400 text-sm">Goszcza i okolice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Potrzebujesz pomocy?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami już teraz. Jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu.
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
              <Link href="/kontakt">Skontaktuj się</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
