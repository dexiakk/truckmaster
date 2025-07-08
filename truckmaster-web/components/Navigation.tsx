"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Truck } from "lucide-react"

const navItems = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/galeria", label: "Galeria" },
  { href: "/opinie", label: "Opinie" },
  { href: "/cennik", label: "Cennik" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-white">Truck Master</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                  pathname === item.href ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:inline-flex bg-yellow-500 hover:bg-yellow-600 text-black">
              <a href="tel:+48730139777">
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń teraz
              </a>
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-yellow-500 ${
                        pathname === item.href ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black mt-6">
                    <a href="tel:+48123456789">
                      <Phone className="mr-2 h-4 w-4" />
                      Zadzwoń teraz
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
