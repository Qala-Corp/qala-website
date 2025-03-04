import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-auto" />
              <span className="font-bold text-xl">Qalá</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              The fastest, most secure way to manage environment variables and sensitive data.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://github.com/qala" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com/qala" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
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
                <Link href="/docs/guides" className="text-muted-foreground hover:text-foreground">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/docs/api-reference" className="text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
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
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  Support
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

