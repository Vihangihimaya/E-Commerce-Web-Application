"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu, X, Heart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartCount, wishlist } = useCart()

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">SH</span>
            </div>
            <span className="font-bold text-xl hidden md:inline">ShopHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition">
              Products
            </Link>
            <Link href="/deals" className="text-foreground hover:text-primary transition">
              Deals
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" className="p-2 hover:bg-muted rounded-lg transition relative">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="p-2 hover:bg-muted rounded-lg transition relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="md:hidden p-2 hover:bg-muted rounded-lg transition" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Home
            </Link>
            <Link href="/products" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Products
            </Link>
            <Link href="/deals" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Deals
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
