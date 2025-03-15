import Link from "next/link"
import { Github, Menu, X, Package, Sparkles } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">

            <div className="flex justify-around items-center">
              <Link href="/" className="w-3/4 flex items-center space-x-2">
              <Logo className="h-auto w-[2rem] [filter:invert(var(--bulb))]" />
                <span className="font-bold text-xl">Qalá</span>
              </Link>

              <div className="w-1/4 flex space-x-0">
                <Link href="https://github.com/Qala-Corp/qala.js" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.npmjs.com/package/qala" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Package className="h-5 w-5" />
                    <span className="sr-only">npm</span>
                  </Button>
                </Link>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              The fastest, most secure way to manage environment variables and sensitive data.
            </p>

          </div>

          <div>
            <h3 className="font-semibold text-sm mb-2">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-2">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/quick-start" className="text-muted-foreground hover:text-foreground">
                  Quick Start Guide
                </Link>
              </li>
              <li>
                <Link href="/docs/integrations" className="text-muted-foreground hover:text-foreground">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-2">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Project
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-muted-foreground hover:text-foreground">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Qalá Corp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
