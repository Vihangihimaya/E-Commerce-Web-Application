"use client"

import type React from "react"

import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
  category: string
  badge: string | null
}

export default function ProductCard({ product }: { product: Product }) {
  const [showAddedMsg, setShowAddedMsg] = useState(false)
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()
  const isFavorite = isInWishlist(product.id)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
  const productSlug = product.name.toLowerCase().replace(/\s+/g, "-")

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setShowAddedMsg(true)
    setTimeout(() => setShowAddedMsg(false), 2000)
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isFavorite) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
  }

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition">
      {/* Image Container */}
      <Link href={`/product/${productSlug}`} className="block relative">
        <div className="relative h-64 bg-muted overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              {product.badge}
            </div>
          )}

          {/* Wishlist Button */}
          <div className="absolute top-3 left-3">
            <button
              onClick={handleToggleWishlist}
              className="bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
            >
              <Heart className={`w-5 h-5 transition ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            {showAddedMsg ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 h-14">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(product.rating))}
            <span className="text-gray-300">{"★".repeat(5 - Math.floor(product.rating))}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          <span className="text-sm font-semibold text-green-600 ml-auto">{discount}% off</span>
        </div>
      </div>
    </div>
  )
}
