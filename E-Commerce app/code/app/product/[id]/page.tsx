import { PRODUCTS } from "@/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import CheckoutButton from "@/components/checkout-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const price = (product.priceInCents / 100).toFixed(2)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center bg-muted rounded-lg p-8">
            <Image
              src={product.images?.[0] || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">{product.category}</p>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary">${price}</p>
            </div>
            <p className="text-lg text-muted-foreground">{product.description}</p>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Category:</span> {product.category}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> ${price}
                </p>
                <p>
                  <span className="font-semibold">Stock:</span> In Stock
                </p>
              </CardContent>
            </Card>
            <CheckoutButton productId={product.id} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
