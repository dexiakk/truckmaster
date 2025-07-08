import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500">Kontakt</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Skontaktuj się z nami w dowolnym momencie. Jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu, aby
            zapewnić Ci profesjonalną pomoc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Dane <span className="text-yellow-500">kontaktowe</span>
              </h2>

              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Telefon</h3>
                        <a
                          href="tel:+48123456789"
                          className="text-yellow-500 hover:text-yellow-400 transition-colors text-lg"
                        >
                          +48 123 456 789
                        </a>
                        <p className="text-gray-400 text-sm">Dostępny 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">E-mail</h3>
                        <a
                          href="mailto:serwistruckmaster@gmail.com"
                          className="text-yellow-500 hover:text-yellow-400 transition-colors"
                        >
                          serwistruckmaster@gmail.com
                        </a>
                        <p className="text-gray-400 text-sm">Odpowiadamy w ciągu 2h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Adres</h3>
                        <p className="text-gray-300">
                          Generała Mariana Langiewicza 11
                          <br />
                          32-010 Goszcza
                        </p>
                        <p className="text-gray-400 text-sm">Małopolska, Polska</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Godziny pracy</h3>
                        <p className="text-yellow-500 font-semibold">Czynne 24/7</p>
                        <p className="text-gray-400 text-sm">Całodobowa dostępność</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Facebook className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Facebook</h3>
                        <a href="https://www.facebook.com/profile.php?id=61572539123559" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                          Truck Master Goszcza
                        </a>
                        <p className="text-gray-400 text-sm">Śledź nasze aktualności</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Szybki kontakt</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6 flex-1"
                >
                  <a href="tel:+48123456789">
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń teraz
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-lg px-8 py-6 flex-1 bg-transparent"
                >
                  <a href="mailto:serwistruckmaster@gmail.com">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Napisz do nas
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Nasza <span className="text-yellow-500">lokalizacja</span>
              </h2>

              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-700 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282327.3978937238!2d17.666808775442124!3d51.11684164387617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716532cfcfdac69%3A0xa28d51543ce5924!2sWulkanizacja%20Mobilny%20Serwis%20Opon%20Tir%2024%2F7%20Pomoc%20Drogowa%20Holowanie%20Truck%20Master%20Mateusz%20Korfel!5e0!3m2!1spl!2spl!4v1751959054841!5m2!1spl!2spl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Truck Master - Lokalizacja w Goszczy"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-4 text-center">
                <p className="text-gray-400 mb-4">Generała Mariana Langiewicza 11, 32-010 Goszcza</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                >
                  <a
                    href="https://maps.app.goo.gl/eiUbaLQR3Ft95yz58"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Otwórz w Google Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Service Area */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Obszar obsługi</h3>
                <p className="text-gray-400 mb-4">
                  Obsługujemy Goszczę i okoliczne miejscowości w promieniu kilkudziesięciu kilometrów:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Goszcza",
                    "Krzeszowice",
                    "Alwernia",
                    "Trzebinia",
                    "Chrzastowice",
                    "Rudawa",
                    "Jerzmanowice",
                    "Sułoszowa",
                  ].map((city, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      {city}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Sytuacja awaryjna?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            W przypadku awarii na drodze zadzwoń natychmiast. Nasz zespół jest dostępny 24 godziny na dobę, aby zapewnić
            Ci szybką pomoc.
          </p>
          <a
            href="tel:+48123456789"
            className="inline-flex items-center justify-center rounded-md bg-white hover:bg-gray-100 text-red-600 text-xl font-bold px-12 py-6 transition-colors"
          >
            <Phone className="mr-3 h-6 w-6" />
            ZADZWOŃ: +48 123 456 789
          </a>
        </div>
      </div>
    </div>
  )
}
