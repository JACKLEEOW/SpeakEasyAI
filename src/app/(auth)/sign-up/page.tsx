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
import { signup } from "./actions"

export default function register() {
  return (<div className="flex items-center h-dvh">
    <Card className="m-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create your account below</CardTitle>
        <CardDescription>
          Enter your email below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={signup}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder=""
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
          </div>
          <div className = "mt-8">
            <Button asChild className="w-full m-auto">
              <button type="submit">Sign Up</button>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
  )
}
