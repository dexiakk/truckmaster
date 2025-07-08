import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Truck Master - Mobilny Serwis Opon 24/7 | Wulkanizacja Goszcza",
  description:
    "Profesjonalny mobilny serwis opon dla ciężarówek i maszyn rolniczych. Wulkanizacja, pomoc drogowa 24/7. Obsługujemy Goszczę i okolice.",
  keywords: "wulkanizacja, mobilny serwis opon, pomoc drogowa, Goszcza, ciężarówki, maszyny rolnicze",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
