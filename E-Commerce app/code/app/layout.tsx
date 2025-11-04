import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopHub - Premium e-commerce Platform",
  description: "Shop the best products online with secure checkout and fast shipping",
  generator: "v0.app",
  metadataBase: new URL(process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || "http://localhost:3000",
    title: "ShopHub - Premium e-commerce Platform",
    description: "Shop the best products online with secure checkout and fast shipping",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopHub - Premium e-commerce Platform",
    description: "Shop the best products online with secure checkout and fast shipping",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
