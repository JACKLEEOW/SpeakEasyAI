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

export default function Login() {
  return (
    <div className="flex items-center h-dvh">
      <Card className="w-full max-w-sm m-auto">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          <CardAction>
            <Button variant="link" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>

        {/* form uses server action `login` (server action must accept FormData) */}
        <CardContent>
          <form id="login-form" action={login}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a className="ml-auto text-sm underline-offset-4 hover:underline" href="/forgot-password">Forgot your password?</a>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button asChild className="w-full">
            {/* native button ensures the form submits FormData to the server action */}
            <button form="login-form" type="submit">Login</button>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}



