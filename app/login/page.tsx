import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SSOButtons } from "@/components/sso-buttons"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome Back
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Log in to your Qalá account to manage your secrets
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <form className="space-y-4">
                  <Input type="email" placeholder="Email" required />
                  <Input type="password" placeholder="Password" required />
                  <Button type="submit" className="w-full">
                    Log In <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                <SSOButtons />
                <div className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
                <div className="text-sm text-muted-foreground">
                  <Link href="/forgot-password" className="text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
