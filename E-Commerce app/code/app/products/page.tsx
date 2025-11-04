import Navbar from "@/components/navbar"
import ProductCatalog from "@/components/product-catalog"
import Footer from "@/components/footer"

export const metadata = {
  title: "Products - ShopHub",
  description: "Browse our collection of quality products",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-lg text-muted-foreground">Browse our complete collection of handpicked products</p>
        </div>
      </div>
      <ProductCatalog />
      <Footer />
    </main>
  )
}
