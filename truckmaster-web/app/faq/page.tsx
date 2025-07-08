"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Phone, Clock, MapPin } from "lucide-react"

const faqData = [
  {
    question: "Jakie są godziny pracy Truck Master?",
    answer:
      "Działamy 24 godziny na dobę, 7 dni w tygodniu. Jesteśmy dostępni przez całą dobę, aby zapewnić pomoc w sytuacjach awaryjnych.",
  },
  {
    question: "Jaki jest obszar działania waszych usług?",
    answer:
      "Obsługujemy Goszczę i okoliczne miejscowości w promieniu kilkudziesięciu kilometrów. Dokładny zasięg ustalamy indywidualnie w zależności od rodzaju usługi i sytuacji.",
  },
  {
    question: "Ile kosztuje dojazd do miejsca awarii?",
    answer:
      "Dojazd w promieniu 10 km od Goszczu jest wliczony w cenę usługi. Za każdy kolejny kilometr doliczamy odpowiednią opłatę zgodnie z naszym cennikiem.",
  },
  {
    question: "Czy naprawiacie wszystkie rodzaje opon?",
    answer:
      "Specjalizujemy się w oponach ciężarowych, rolniczych i do maszyn budowlanych. Naprawiamy również opony osobowe. Każdy przypadek oceniamy indywidualnie pod kątem możliwości naprawy.",
  },
  {
    question: "Jak szybko możecie przyjechać na miejsce awarii?",
    answer:
      "Czas dojazdu zależy od lokalizacji i aktualnego obciążenia. Zazwyczaj docieramy na miejsce w ciągu 30-90 minut od zgłoszenia w obszarze Goszczy i najbliższych okolic.",
  },
  {
    question: "Czy oferujecie usługi holowania?",
    answer:
      "Tak, oferujemy profesjonalne usługi holowania pojazdów ciężarowych i maszyn rolniczych. Posiadamy odpowiedni sprzęt do bezpiecznego transportu.",
  },
  {
    question: "Jakie formy płatności akceptujecie?",
    answer:
      "Akceptujemy płatności gotówką, kartą płatniczą, przelewem bankowym oraz wystawiamy faktury VAT dla firm. Płatność można uregulować na miejscu lub przelewem.",
  },
  {
    question: "Czy udzielacie gwarancji na wykonane usługi?",
    answer:
      "Tak, wszystkie nasze usługi objęte są gwarancją. Czas gwarancji zależy od rodzaju wykonanej usługi i jest każdorazowo określany indywidualnie.",
  },
  {
    question: "Czy sprzedajecie nowe opony i felgi?",
    answer:
      "Tak, prowadzimy sprzedaż nowych opon ciężarowych, rolniczych oraz felg stalowych i aluminiowych. Pomagamy również w doborze odpowiednich opon do konkretnego pojazdu.",
  },
  {
    question: "Co zrobić w przypadku awarii w nocy lub w święta?",
    answer:
      "Działamy 24/7, więc możesz zadzwonić o każdej porze. Za usługi nocne (22:00-6:00) i świąteczne doliczamy 50% do standardowej ceny.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Często zadawane <span className="text-yellow-500">pytania</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług. Jeśli nie znajdziesz odpowiedzi
            na swoje pytanie, skontaktuj się z nami.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-gray-800 rounded-lg p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Potrzebujesz <span className="text-yellow-500">pomocy</span>?
            </h2>
            <p className="text-gray-400 text-lg">
              Jeśli nie znalazłeś odpowiedzi na swoje pytanie, skontaktuj się z nami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Zadzwoń</h3>
                <a href="tel:+48123456789" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                  +48 123 456 789
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Dostępność</h3>
                <p className="text-gray-400">
                  24 godziny na dobę
                  <br />7 dni w tygodniu
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Lokalizacja</h3>
                <p className="text-gray-400">
                  Małopolska
                  <br />
                  Śląsk i Świętokrzyskie
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Awaria? Zadzwoń natychmiast!</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            W przypadku awarii na drodze nie czekaj - skontaktuj się z nami natychmiast. Jesteśmy dostępni 24/7.
          </p>
          <a
            href="tel:+48730139777"
            className="inline-flex items-center justify-center rounded-md bg-white hover:bg-gray-100 text-red-600 text-xl font-bold px-12 py-6 transition-colors"
          >
            <Phone className="mr-3 h-6 w-6" />
            +48 730 139 777
          </a>
        </div>
      </div>
    </div>
  )
}
