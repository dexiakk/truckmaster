import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Clock, Truck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">Truck Master</span>
            </div>
            <p className="text-gray-400 text-sm">
              Profesjonalny mobilny serwis opon dla ciężarówek i maszyn rolniczych. Działamy 24/7 w Małopolsce i okolicach.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-500">Szybkie linki</h3>
            <div className="space-y-2">
              <Link href="/uslugi" className="block text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Usługi
              </Link>
              <Link href="/cennik" className="block text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Cennik
              </Link>
              <Link href="/galeria" className="block text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Galeria
              </Link>
              <Link href="/kontakt" className="block text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-500">Nasze usługi</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Wulkanizacja mobilna</p>
              <p>Serwis opon</p>
              <p>Pomoc drogowa 24/7</p>
              <p>Holowanie</p>
              <p>Serwis maszyn rolniczych</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-500">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-yellow-500" />
                <a href="tel:+48123456789" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-yellow-500" />
                <a
                  href="mailto:serwistruckmaster@gmail.com"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  serwistruckmaster@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-400">Goszcza, Małopolska</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-400">Czynne 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Facebook className="h-4 w-4 text-yellow-500" />
                <a href="https://www.facebook.com/profile.php?id=61572539123559" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Truck Master. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-gray-400 text-[10px]">Powered by © DESTRUCT Systems</p>
        </div>
      </div>
    </footer>
  )
}
