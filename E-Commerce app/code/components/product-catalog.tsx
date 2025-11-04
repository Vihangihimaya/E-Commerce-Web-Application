"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import ProductCard from "./product-card"

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 324,
    image: "/wireless-headphones.png",
    category: "Electronics",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.2,
    reviews: 156,
    image: "/classic-denim-jacket.png",
    category: "Fashion",
    badge: "35% Off",
  },
  {
    id: 3,
    name: "Eco-Friendly Water Bottle",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviews: 512,
    image: "/water-bottle-eco.jpg",
    category: "Sports",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviews: 289,
    image: "/smart-watch-fitness.png",
    category: "Electronics",
    badge: "New",
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.3,
    reviews: 178,
    image: "/cotton-t-shirt.jpg",
    category: "Fashion",
    badge: null,
  },
  {
    id: 6,
    name: "4K Webcam Pro",
    price: 149.99,
    originalPrice: 229.99,
    rating: 4.4,
    reviews: 201,
    image: "/4k-webcam.png",
    category: "Electronics",
    badge: "Sale",
  },
]

export default function ProductCatalog() {
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["all", "Electronics", "Fashion", "Sports"]

  let filteredProducts = filter === "all" ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter((p) => p.category === filter)

  if (searchQuery.trim()) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Featured Products</h2>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-card text-foreground"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {sortedProducts.length} product{sortedProducts.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No products found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  )
}
