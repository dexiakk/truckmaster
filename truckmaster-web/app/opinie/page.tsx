import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Jolanta Stec",
    rating: 5,
    text: "Jakość usługi na najwyższym poziomie. Bezproblemowy kontakt telefoniczny, a trzeba dodać że na 10 wykonanych telefonów Kraków i okolice odebrało jedynie 3 serwisy 24/7 . Szybki dojazd, jeszcze szybsza diagnoza i profesjonalny montaż koła. Płatność blikiem ułatwia cała operacje. FV na miejscu. Cena adekwatna do usługi. Chlopaki zdecydowanie chcą pomóc wiec bez obawy dzwonić i korzystac. Dla mnie 10 * i +. Polecam gorąco",
    date: "2 tygodnie temu",
    service: "Pomoc drogowa 24/7",
  },
  {
    id: 2,
    name: "Szymon Czekaj",
    rating: 5,
    text: "Gorąco polecam usługi Pana Mateusza. Szybko, sprawnie i na temat!",
    date: "1 miesiąc temu",
    service: "Serwis maszyn rolniczych",
  },
  {
    id: 3,
    name: "M M",
    rating: 5,
    text: "Polecam polskiego fachowca wspieramy polskie firmy",
    date: "6 miesięcy temu",
    service: "Mobilny serwis opon",
  },
  {
    id: 4,
    name: "Anna Zielińska",
    rating: 5,
    text: "Bardzo dobra obsługa klienta. Szybko odpowiadają na telefon i zawsze są pomocni. Polecam wszystkim kierowcom.",
    date: "1 tydzień temu",
    service: "Wulkanizacja",
  },
  {
    id: 5,
    name: "Tomasz Kaczmarek",
    rating: 5,
    text: "Profesjonalny zespół z nowoczesnym sprzętem. Naprawili uszkodzoną oponę na miejscu. Bardzo zadowolony z usługi.",
    date: "2 tygodnie temu",
    service: "Naprawa opon",
  },
  {
    id: 6,
    name: "Krzysztof Lewandowski",
    rating: 5,
    text: "Świetne ceny i jakość usług. Holowanie przebiegło bez problemów. Na pewno skorzystam ponownie.",
    date: "1 miesiąc temu",
    service: "Holowanie",
  },
]

const stats = [
  { number: "500+", label: "Zadowolonych klientów" },
  { number: "5.0", label: "Średnia ocena" },
  { number: "24/7", label: "Dostępność" },
  { number: "100%", label: "Rekomendacji" },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500">Opinie</span> naszych klientów
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Zobacz co mówią o nas nasi klienci. Ich zadowolenie jest naszym priorytetem.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-yellow-500" />
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">"{review.text}"</p>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-yellow-500">{review.service}</p>
                    </div>
                    <p className="text-sm text-gray-400">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Podziel się swoją opinią</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Jeśli skorzystałeś z naszych usług, zostaw opinię na Google. Twoja opinia pomoże innym klientom i nam w
            dalszym rozwoju.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://g.co/kgs/pwEAPM7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 transition-colors"
            >
              Oceń nas na Google
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572539123559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Dlaczego nam <span className="text-yellow-500">ufają</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Wysokie oceny</h4>
              <p className="text-gray-400">Średnia ocena 5/5 na Google</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Pozytywne opinie</h4>
              <p className="text-gray-400">100% rekomendacji od klientów</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Zaufanie</h4>
              <p className="text-gray-400">Ponad 500 zadowolonych klientów</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
