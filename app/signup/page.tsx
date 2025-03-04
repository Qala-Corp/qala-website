import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create your Qalá account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="email" placeholder="Email" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="password" placeholder="Password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Sign Up</Button>
            <p className="mt-2 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

