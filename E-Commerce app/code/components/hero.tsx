"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Discover Amazing Products</h1>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Shop the latest trends with unbeatable prices. Thousands of products handpicked for you.
            </p>
            <Link
              href="/products"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-primary/20 rounded-lg h-96 flex items-center justify-center">
            <img
              src="/shopping-bags-and-products.jpg"
              alt="Shopping"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
