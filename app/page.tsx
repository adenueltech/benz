import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import FeatureCard from "@/components/feature-card"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"
import VideoHero from "@/components/video-hero"
import ParallaxSection from "@/components/parallax-section"
import CarSpecs from "@/components/car-specs"
import MobileNavToggle from "@/components/mobile-nav-toggle"
import type { Metadata } from "next"

// Add metadata for SEO
export const metadata: Metadata = {
  title: "Mercedes-Benz | The Best or Nothing",
  description: "Experience the luxury, performance, and innovation of Mercedes-Benz vehicles. Discover our latest models, features, and technology.",
  keywords: "Mercedes-Benz, luxury cars, EQS, S-Class, AMG GT, electric vehicles, luxury sedans, performance cars",
  openGraph: {
    title: "Mercedes-Benz | The Best or Nothing",
    description: "Experience the luxury, performance, and innovation of Mercedes-Benz vehicles.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mercedes-Benz Luxury Vehicles",
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              width={40}
              height={40}
              alt="Mercedes-Benz Logo"
              className="h-10 w-10"
              priority
              unoptimized
            />
            <span className="text-xl font-bold tracking-tighter">Mercedes-Benz</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#models" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Models
            </Link>
            <Link href="#features" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Features
            </Link>
            <Link href="#specs" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Specifications
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-black text-black hover:bg-gray-100">
              Book a Test Drive
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">Explore Models</Button>
            <MobileNavToggle />
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-black">Exceptional Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative technology and premium features that define the Mercedes-Benz experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Electric Intelligence"
              description="Advanced electric drivetrain with exceptional range and performance."
              icon="zap"
              image="/ei.jpeg"
            />


            {/* ahfuAHF */}
            <FeatureCard
              title="MBUX Hyperscreen"
              description="Stunning 56-inch curved display with intuitive AI-powered interface."
              icon="monitor"
              image="/mbux.jpg"
            />
            <FeatureCard
              title="Autonomous Driving"
              description="Level 3 autonomous driving capabilities for a safer, more relaxed journey."
              icon="car"
              image="/autonomus.jpeg"
            />
            <FeatureCard
              title="Burmester® 4D Sound"
              description="Immersive audio experience with sound resonators integrated into seats."
              icon="music"
              image="/sound.jpeg"
            />
            <FeatureCard
              title="Air Suspension"
              description="Adaptive air suspension for unparalleled comfort and handling."
              icon="wind"
              image="/air-suspension.jpeg"
            />
            <FeatureCard
              title="Energizing Comfort"
              description="Coordinated comfort systems for enhanced wellbeing on every journey."
              icon="heart"
              image="/comfort.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Parallax Design Section */}
      <ParallaxSection />

      {/* Specifications Section */}
      <section id="specs" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-black">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the engineering excellence behind the new Mercedes-Benz.
            </p>
          </div>

          <CarSpecs />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-black">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the beauty of Mercedes-Benz from every angle. Click on any image to view in full detail.
            </p>
          </div>

          <ImageGallery />

          <div className="mt-12 text-center">
            <Button className="group bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Models Showcase */}
      <section id="models" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-black">Explore Our Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect Mercedes-Benz to match your lifestyle and aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "EQS Sedan", type: "Electric", image: "/EQS.jpg", description: "The all-electric luxury sedan with exceptional range and performance" },
              { name: "S-Class", type: "Luxury", image: "/SEDAN.jpg", description: "The flagship luxury sedan with cutting-edge technology and comfort" },
              { name: "AMG GT", type: "Performance", image: "/AMG.jpg", description: "High-performance sports car with race-inspired engineering" },
            ].map((model, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[3/2] relative">
                  <Image
                    src={model.image || "/placeholder.svg"}
                    alt={`Mercedes-Benz ${model.name} - ${model.description}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3} // Priority load for first 3 models
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-white text-black rounded-full">
                    {model.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300"
                  >
                    Discover
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="group bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              View All Models
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Experience Mercedes-Benz Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a test drive or visit a showroom to experience the luxury and performance of Mercedes-Benz
              firsthand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="group bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 h-auto">
                Book a Test Drive
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto">
                Find a Dealer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
