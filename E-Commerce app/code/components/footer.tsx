import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">ShopHub</h4>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted destination for quality products and amazing deals.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
              <Twitter className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
              <Instagram className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
              <Linkedin className="w-5 h-5 hover:opacity-80 cursor-pointer transition" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-semibold mb-4">Shop</h5>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/products" className="hover:text-primary-foreground transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-foreground transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-foreground transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/deals" className="hover:text-primary-foreground transition">
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-semibold mb-4">Newsletter</h5>
            <p className="text-primary-foreground/80 mb-4 text-sm">Subscribe for exclusive deals and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-l-lg text-foreground text-sm"
              />
              <button className="bg-primary-foreground text-primary px-4 py-2 rounded-r-lg hover:opacity-90 transition">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-primary-foreground/80 text-sm">
          <p>&copy; 2025 ShopHub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
