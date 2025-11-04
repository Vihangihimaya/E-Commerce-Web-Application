import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Check your email</CardTitle>
            <CardDescription>We've sent you a verification link to confirm your account.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Please click the link in the email to verify your account and start shopping.
            </p>
            <Link href="/" className="text-primary hover:underline">
              Return to home
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
