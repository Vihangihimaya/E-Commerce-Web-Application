"use server"

import { stripe } from "@/lib/stripe"
import type { CartItem } from "@/lib/cart-context"

export async function createCheckoutSession(cartItems: CartItem[], totalAmount: number) {
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    mode: "payment",
  })

  return session.client_secret
}

export async function getCheckoutSessionStatus(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  return {
    status: session.payment_status,
    customer_email: session.customer_details?.email,
  }
}
