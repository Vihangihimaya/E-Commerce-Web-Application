"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

interface Deal {
  id: number
  name: string
  image: string
  originalPrice: number
  dealPrice: number
  discount: number
  category: string
  timeLeft?: number
  isFlashSale?: boolean
}

const DEALS: Deal[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    image: "/wireless-headphones.png",
    originalPrice: 199.99,
    dealPrice: 99.99,
    discount: 50,
    category: "Electronics",
    isFlashSale: true,
    timeLeft: 180,
  },
  {
    id: 2,
    name: "Luxury Designer Watch",
    image: "/designer-watch.jpg",
    originalPrice: 299.99,
    dealPrice: 149.99,
    discount: 50,
    category: "Accessories",
    isFlashSale: true,
    timeLeft: 240,
  },
  {
    id: 3,
    name: "Smartphone Pro Max",
    image: "/modern-smartphone.png",
    originalPrice: 1299.99,
    dealPrice: 999.99,
    discount: 23,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Premium Leather Jacket",
    image: "/classic-leather-jacket.png",
    originalPrice: 450.0,
    dealPrice: 249.99,
    discount: 44,
    category: "Clothing",
  },
  {
    id: 5,
    name: "4K Digital Camera",
    image: "/4k-camera.png",
    originalPrice: 899.99,
    dealPrice: 599.99,
    discount: 33,
    category: "Electronics",
    isFlashSale: true,
    timeLeft: 120,
  },
  {
    id: 6,
    name: "Vintage Sunglasses",
    image: "/stylish-sunglasses.png",
    originalPrice: 199.99,
    dealPrice: 79.99,
    discount: 60,
    category: "Accessories",
  },
]

export default function DealsPage() {
  const [timeRemaining, setTimeRemaining] = useState<Record<number, string>>({})

  useEffect(() => {
    const updateTimers = () => {
      const newTimes: Record<number, string> = {}
      DEALS.forEach((deal) => {
        if (deal.timeLeft && deal.isFlashSale) {
          const minutes = Math.floor(deal.timeLeft / 60)
          const seconds = deal.timeLeft % 60
          newTimes[deal.id] = `${minutes}m ${seconds}s`
        }
      })
      setTimeRemaining(newTimes)
    }

    updateTimers()
    const interval = setInterval(updateTimers, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Deals</h1>
          <p className="text-lg opacity-90">Unbeatable prices on premium products - Limited time offers!</p>
        </div>
      </div>

      {/* Flash Sales Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Flash Sales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEALS.filter((d) => d.isFlashSale).map((deal) => (
              <Card key={deal.id} className="hover:shadow-lg transition overflow-hidden">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    -{deal.discount}%
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {timeRemaining[deal.id]}
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">{deal.category}</p>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{deal.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">${deal.dealPrice.toFixed(2)}</span>
                    <span className="text-sm line-through text-muted-foreground">${deal.originalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Deals Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Best Deals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEALS.filter((d) => !d.isFlashSale).map((deal) => (
              <Card key={deal.id} className="hover:shadow-lg transition overflow-hidden">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    -{deal.discount}%
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">{deal.category}</p>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{deal.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">${deal.dealPrice.toFixed(2)}</span>
                    <span className="text-sm line-through text-muted-foreground">${deal.originalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
