import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.jpg"
                width={40}
                height={40}
                alt="Mercedes-Benz Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold tracking-tighter">Mercedes-Benz</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Mercedes-Benz: The best or nothing. Experience the luxury, performance, and innovation that define our
              brand.
            </p>
            <div className="flex space-x-4">
              
              <Link href="https://x.com/adenueltech" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/adenuel_ns/" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            
              <Link href="https://www.linkedin.com/in/emmanuel-adewunmi-613512308/" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Models</h3>
            <ul className="space-y-3">
              {["Sedans", "SUVs", "Coupes", "Convertibles", "Electric Vehicles", "AMG Models"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Services</h3>
            <ul className="space-y-3">
              {["Financing", "Leasing", "Insurance", "Service & Parts", "Accessories", "Mercedes me connect"].map(
                (item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Innovation", "Sustainability", "Press", "Investor Relations"].map(
                (item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mercedes-Benz Landing Page Developed by AdenuelTech. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Legal Notice", "Privacy Policy", "Cookies", "Terms of Use", "Accessibility"].map((item, index) => (
                <Link key={index} href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
