import Link from "next/link"
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#22024E] text-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="footer.webp"></img>
          </div>
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex gap-2">VEHICLE VIN <img src="/download.png" className="w-10" /></h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Your trusted partner for innovative digital solutions. We are committed to delivering quality, creativity,
              and excellence to help businesses thrive in the digital world.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>090078601</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>vehiclefaxecord@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>21 King Street Melbourne, 3000, United States</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              COMPANY
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gray-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              FOLLOW US
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/graphic" className="hover:text-gray-300">
                  Graphic & Motion Design
                </Link>
              </li>
              <li>
                <Link href="/services/mobile" className="hover:text-gray-300">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="hover:text-gray-300">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/web" className="hover:text-gray-300">
                  Web Design & Development
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-200">Copyright 2024. Vehicle Fax Records, All Rights Reserved | Payment Non-Refundable.</p>
          <Link href="/" className="text-sm text-gray-200 hover:text-white mt-4 md:mt-0">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}