import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Clock, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O <span className="text-yellow-500">nas</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Truck Master to profesjonalna firma świadcząca mobilne usługi wulkanizacyjne dla pojazdów ciężarowych i
            maszyn rolniczych na terenie Małopolski i okolic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Nasza <span className="text-yellow-500">historia</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Truck Master to dynamicznie rozwijająca się firma z siedzibą w Goszczy, specjalizująca się w mobilnych
              usługach wulkanizacyjnych. Nasza jednostka mobilna obsługuje obszar w promieniu kilkudziesięciu
              kilometrów, zapewniając szybką i profesjonalną pomoc.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Stawiamy na niezawodność i profesjonalizm w każdym aspekcie naszej działalności. Nasz zespół składa się z
              doświadczonych specjalistów, którzy dbają o najwyższą jakość świadczonych usług. Działamy 24 godziny na
              dobę, 7 dni w tygodniu, aby być zawsze gotowi do pomocy naszym klientom.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dzięki nowoczesnym narzędziom i wieloletniemu doświadczeniu, jesteśmy w stanie szybko i skutecznie
              rozwiązać problemy związane z oponami w pojazdach ciężarowych i maszynach rolniczych.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/about-us.jpg?height=500&width=500"
                alt="Truck Master - mobilny serwis"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Dostępność</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Lokalizacja</h3>
              <p className="text-gray-400">Goszcza, Małopolska</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Zespół</h3>
              <p className="text-gray-400">Doświadczeni specjaliści</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Dostępność</h3>
              <p className="text-gray-400">24 godziny, 7 dni</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Jakość</h3>
              <p className="text-gray-400">Profesjonalne usługi</p>
            </CardContent>
          </Card>
        </div>

        {/* Mission */}
        <div className="bg-gray-800 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Nasza <span className="text-yellow-500">misja</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Naszą misją jest zapewnienie najwyższej jakości usług mobilnych w zakresie wulkanizacji i serwisu opon.
            Dążymy do tego, aby nasi klienci mogli zawsze liczyć na szybką, profesjonalną i niezawodną pomoc,
            niezależnie od pory dnia czy nocy. Stawiamy na długotrwałe relacje z klientami, oparte na zaufaniu i
            wzajemnym szacunku.
          </p>
        </div>
      </div>
    </div>
  )
}
