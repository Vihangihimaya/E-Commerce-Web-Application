"use client"

import { useCallback, useState } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { startCheckoutSession } from "@/app/actions/stripe"
import { Button } from "@/components/ui/button"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutButton({ productId }: { productId: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const startCheckoutSessionForProduct = useCallback(() => startCheckoutSession(productId), [productId])

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} className="w-full bg-primary hover:bg-primary/90">
        Buy Now
      </Button>
    )
  }

  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret: startCheckoutSessionForProduct }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
