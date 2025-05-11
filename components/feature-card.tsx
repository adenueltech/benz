"use client"

import { useState } from "react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Zap, Monitor, Car, Music, Wind, Heart, Shield, Cpu, Battery, Wifi, Map, Lock } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  image?: string
}

export default function FeatureCard({ title, description, icon, image }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (iconName: string): LucideIcon => {
    const icons = {
      zap: Zap,
      monitor: Monitor,
      car: Car,
      music: Music,
      wind: Wind,
      heart: Heart,
      shield: Shield,
      cpu: Cpu,
      battery: Battery,
      wifi: Wifi,
      map: Map,
      lock: Lock,
    }

    return icons[iconName] || Car
  }

  const IconComponent = getIcon(icon)

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image background - only visible on hover */}
      {image && (
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={`Mercedes-Benz ${title} - ${description}`}
            fill
            className="object-cover"
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={title.includes("Electric") || title.includes("MBUX")} // Prioritize loading for key features
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}

      <div className={`relative z-10 p-6 transition-all duration-500 ${isHovered ? "text-white" : "text-black"}`}>
        <div
          className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center transition-colors duration-500 ${
            isHovered ? "bg-white" : "bg-gray-100"
          }`}
        >
          <IconComponent
            className={`h-6 w-6 transition-colors duration-500 ${isHovered ? "text-black" : "text-gray-600"}`}
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`transition-colors duration-500 ${isHovered ? "text-gray-200" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
    </div>
  )
}
