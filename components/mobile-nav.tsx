"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="container mx-auto px-4 py-8 h-full flex flex-col">
        <div className="flex justify-end mb-8">
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
            <X className="h-8 w-8" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="flex-1 flex bg-white flex-col justify-center">
          <ul className="space-y-6 text-center">
            {[
              { href: "#models", label: "Models" },
              { href: "#features", label: "Features" },
              { href: "#specs", label: "Specifications" },
              { href: "#gallery", label: "Gallery" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-2xl font-medium text-black hover:text-gray-300 transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto space-y-4">
          <Button className="w-full border-white text-white bg-black" onClick={onClose}>
            Book a Test Drive
          </Button>
          <Button variant="outline" className="w-full border-white text-white bg-black" onClick={onClose}>
            Explore Models
          </Button>
        </div>
      </div>
    </div>
  )
}
