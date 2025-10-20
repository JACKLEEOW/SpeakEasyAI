"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { login } from "./actions"
import { signInWithGoogle } from "../../../../actions/auth"

export default function Login() {

  async function handleSignIn() {
    const { url } = await signInWithGoogle("/dashboard")

    if (url) {
      window.location.href = url
    }


  }
  return (
    <div className="flex items-center h-dvh">
      <Card className="w-full max-w-sm m-auto">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Click the link below to sign in</CardDescription>
        </CardHeader>

        {/* form uses server action `login` (server action must accept FormData) */}
        <CardContent>
          <form action={handleSignIn}>
            <div className="flex flex-col gap-6">
              <Button className="w-full" type="submit"
              //TODO add disabled while pending
              >
                Continue with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}



