"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/opony-ciezarowka.jpg?height=400&width=600",
    alt: "Naprawa opon ciężarówki",
    category: "Wulkanizacja",
  },
  {
    id: 2,
    src: "/serwis-opon.jpg?height=400&width=600",
    alt: "Mobilny serwis opon",
    category: "Serwis",
  },
  {
    id: 3,
    src: "/naprawa-sprzet-ciez.jpg?height=400&width=600",
    alt: "Naprawa sprzętu ciężkiego",
    category: "Wulkanizacja",
  },
  {
    id: 4,
    src: "/naprawa-opony.jpg?height=400&width=600",
    alt: "Serwis maszyn rolniczych",
    category: "Pomoc drogowa",
  },
  {
    id: 5,
    src: "/naprawa-sprzet-rol.jpg?height=400&width=600",
    alt: "Wymiana opon ciężarowych",
    category: "Maszyny rolnicze",
  },
  {
    id: 6,
    src: "/naprawa-wywrotka.jpg?height=400&width=600",
    alt: "Naprawa opon wywrotki",
    category: "Wulkanizacja",
  },
  {
    id: 7,
    src: "/wymiana-opon.jpg?height=400&width=600",
    alt: "Naprawa opony na miejscu",
    category: "Serwis",
  },
  {
    id: 8,
    src: "/pomoc-drogowa.jpg?height=400&width=600",
    alt: "Wymiana opon mobilnie",
    category: "Pomoc drogowa",
  },
  {
    id: 9,
    src: "/naprawa-opon.jpg?height=400&width=600",
    alt: "Naprawa opon",
    category: "Serwis",
  },
]

const categories = ["Wszystkie", "Wulkanizacja", "Serwis", "Pomoc drogowa", "Maszyny rolnicze", "Holowanie", "Sklep"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    selectedCategory === "Wszystkie" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-500">Galeria</span> naszych prac
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Zobacz przykłady naszych realizacji i przekonaj się o jakości naszych usług
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                  : "border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="bg-gray-800 border-gray-700 overflow-hidden group cursor-pointer hover:border-yellow-500 transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                  <p className="text-yellow-500 text-sm">{image.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-yellow-500"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-lg font-medium">{selectedImage.alt}</h3>
                <p className="text-yellow-500">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gray-800 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Chcesz zobaczyć więcej?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Odwiedź naszą stronę na Facebooku, aby zobaczyć najnowsze realizacje i być na bieżąco z naszą działalnością.
          </p>
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6">
            <a href="https://www.facebook.com/profile.php?id=61572539123559" target="_blank" rel="noopener noreferrer">
              Odwiedź nas na Facebooku
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
