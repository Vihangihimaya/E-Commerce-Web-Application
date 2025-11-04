export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
  category: string
}

export const PRODUCTS: Product[] = [
  {
    id: "wireless-headphones",
    name: "Premium Wireless Headphones",
    description: "High-quality audio with noise cancellation and 30-hour battery life",
    priceInCents: 29999,
    category: "audio",
    images: ["/wireless-headphones.jpg"],
  },
  {
    id: "classic-denim-jacket",
    name: "Classic Denim Jacket",
    description: "Timeless denim jacket perfect for any occasion",
    priceInCents: 9999,
    category: "clothing",
    images: ["/denim-jacket.jpg"],
  },
  {
    id: "smart-watch",
    name: "Smart Watch Pro",
    description: "Track your fitness with advanced health monitoring features",
    priceInCents: 19999,
    category: "electronics",
    images: ["/smart-watch.jpg"],
  },
  {
    id: "leather-backpack",
    name: "Premium Leather Backpack",
    description: "Durable leather backpack with multiple compartments",
    priceInCents: 14999,
    category: "accessories",
    images: ["/leather-backpack.jpg"],
  },
]
