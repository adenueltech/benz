"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only apply parallax effect on desktop
    if (window.innerWidth < 768) return

    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current || !contentRef.current) return

      const scrollPosition = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how far through the section we've scrolled
      const scrollPercentage = (scrollPosition - (sectionTop - viewportHeight)) / (sectionHeight + viewportHeight)

      if (scrollPercentage >= 0 && scrollPercentage <= 1) {
        // Parallax effect for image
        imageRef.current.style.transform = `translateY(${scrollPercentage * -100}px)`

        // Fade in content
        contentRef.current.style.opacity = Math.min(1, scrollPercentage * 2).toString()
        contentRef.current.style.transform = `translateY(${(1 - Math.min(1, scrollPercentage * 2)) * 50}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Initialize content opacity for mobile
  useEffect(() => {
    if (window.innerWidth < 768 && contentRef.current) {
      contentRef.current.style.opacity = "1"
      contentRef.current.style.transform = "translateY(0)"
    }
  }, [])

  return (
    <section ref={sectionRef} id="design" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div
            ref={contentRef}
            className="md:w-1/2 order-2 md:order-1 opacity-0 transition-all duration-1000 mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-black">Designed for Perfection</h2>
            <p className="text-xl text-gray-600 mb-8">
              Every curve, every line, every detail of a Mercedes-Benz is crafted with precision and purpose. Our design
              philosophy combines aesthetic beauty with aerodynamic efficiency.
            </p>
            <ul className="space-y-4">
              {["Aerodynamic Excellence", "Premium Materials", "Handcrafted Details", "Iconic Styling"].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-black" />
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ),
              )}
            </ul>
            <Button className="mt-8 bg-black text-white hover:bg-gray-800">Explore Design</Button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0 w-full">
            <div ref={imageRef} className="transition-transform duration-300 ease-out relative pb-12 pl-6">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/herroo.jpg"
                  alt="Mercedes-Benz Design Excellence - Crafted with precision and purpose"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  unoptimized
                />
              </div>

              {/* Rating card - repositioned for better mobile display */}
              <div className="absolute bottom-0 left-0 bg-white p-4 rounded-lg shadow-lg z-10 max-w-[200px]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-black">"The pinnacle of automotive design excellence"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
