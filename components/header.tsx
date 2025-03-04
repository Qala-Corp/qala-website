"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Menu, X, Package, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="font-bold text-xl">Qalá</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/features"
                        >
                          <Sparkles className="h-10 w-10 text-primary mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">Features</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore all the powerful features Qalá offers for secure secrets management.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/docs/integrations/vercel"
                        >
                          <div className="text-sm font-medium leading-none">Vercel Integration</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Seamlessly connect with Vercel deployments.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/docs/integrations/docker"
                        >
                          <div className="text-sm font-medium leading-none">Docker Integration</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Secure your containerized applications.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/docs/integrations/github-actions"
                        >
                          <div className="text-sm font-medium leading-none">GitHub Actions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Secure CI/CD workflows with Qalá.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/docs"
                        >
                          <div className="text-sm font-medium leading-none">Documentation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn how to use Qalá effectively.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/docs/guides"
                        >
                          <div className="text-sm font-medium leading-none">Guides</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Step-by-step tutorials for common use cases.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/docs/api-reference"
                        >
                          <div className="text-sm font-medium leading-none">API Reference</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Detailed API documentation for developers.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/blog"
                        >
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest news and updates from Qalá.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
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
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Logo className="h-6 w-6" />
                    <span className="font-bold text-xl">Qalá</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 py-4">
                  <Link href="/features" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Product
                    </Button>
                  </Link>
                  <Link href="/pricing" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/docs" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Documentation
                    </Button>
                  </Link>
                  <Link href="/blog" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Blog
                    </Button>
                  </Link>
                </nav>
                <div className="mt-auto border-t pt-4 flex flex-col gap-2">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

