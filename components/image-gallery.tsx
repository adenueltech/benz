"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

// Gallery images with enhanced SEO descriptions
const galleryImages = [
  {
    src: "/front.jpeg",
    alt: "Mercedes-Benz Front View - Distinctive LED headlights and iconic star grille design",
    caption: "Striking Front Design",
  },
  {
    src: "/side.jpg",
    alt: "Mercedes-Benz Side Profile - Elegant aerodynamic silhouette with premium contours",
    caption: "Elegant Side Profile",
  },
  {
    src: "/back.jpg",
    alt: "Mercedes-Benz Rear View - Powerful stance with LED taillights and dual exhaust system",
    caption: "Powerful Rear Design",
  },
  {
    src: "/frontseat.jpg",
    alt: "Mercedes-Benz Interior - Premium cabin with handcrafted materials and ambient lighting",
    caption: "Luxurious Interior",
  },
  {
    src: "/autonomus.jpeg",
    alt: "Mercedes-Benz Dashboard - Advanced digital cockpit with MBUX Hyperscreen technology",
    caption: "Advanced Dashboard",
  },
  {
    src: "/alloy.jpg",
    alt: "Mercedes-Benz Wheels - Premium multi-spoke alloy wheels with performance design",
    caption: "Premium Alloy Wheels",
  },
]

export default function ImageGallery() {
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleOpenImage = (index: number) => {
    setCurrentImageIndex(index)
    setOpen(true)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "ArrowRight") {
      handleNext()
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => handleOpenImage(index)}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 3} // Priority load first 3 images
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-6xl w-[95vw] p-0 bg-black border-0"
          onKeyDown={handleKeyDown}
          onInteractOutside={() => setOpen(false)}
        >
          <div className="relative h-[85vh] flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white z-50 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white z-50 hover:bg-white/10 h-12 w-12"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="relative w-full h-full">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain"
                priority
                unoptimized
                sizes="95vw"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-50 hover:bg-white/10 h-12 w-12"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{galleryImages[currentImageIndex].caption}</p>
              <p className="text-sm text-gray-300">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto py-2">
              {galleryImages.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-12 rounded overflow-hidden transition-all ${
                    currentImageIndex === idx ? "ring-2 ring-white scale-110" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb.src || "/placeholder.svg"}
                    alt={`Mercedes-Benz ${thumb.caption} Thumbnail`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
