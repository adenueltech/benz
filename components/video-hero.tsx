"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function VideoHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsVideoPlaying(true))
          .catch((err) => {
            console.error("Video play failed:", err)
            setVideoFailed(true)
          })
      } else {
        videoRef.current.pause()
        setIsVideoPlaying(false)
      }
    }
  }

  // Try to autoplay video on both mobile and desktop
  useEffect(() => {
    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .then(() => {
            setIsVideoPlaying(true)
          })
          .catch((err) => {
            // Autoplay was prevented (common on mobile)
            console.log("Autoplay prevented:", err)
            // Don't set videoFailed here as the user can still manually play
          })
      }
    }

    handleAutoplay()

    // Add event listener for when the video can play
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener("canplay", handleAutoplay)
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("canplay", handleAutoplay)
      }
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background - Replace with actual Mercedes video */}
      <div className="absolute inset-0 bg-black">
        {/* Fallback image only shown if video fails to load */}
        {videoFailed && <Image src="/hero.png" alt="Mercedes-Benz" fill priority className="object-cover" />}

        {/* Video element - now visible on both mobile and desktop */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/hero.png" // Use the same image as poster for initial load
        >
          <source src="/herovid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 animate-fade-in-up">
              The Future of Luxury Driving
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
              Experience unparalleled performance, cutting-edge technology, and timeless elegance.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <Button className="group bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 h-auto">
                Configure Yours
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Only show play button if video isn't autoplaying */}
             
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-16 relative overflow-hidden">
          <div className="w-full h-full bg-white absolute animate-scroll-down"></div>
        </div>
        <span className="text-white text-sm mt-2">Scroll to explore</span>
      </div>
    </section>
  )
}
