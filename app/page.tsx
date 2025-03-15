import Link from "next/link"
import { ArrowRight, Package, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ComparisonTable } from "@/components/comparison-table"
import { FeatureGrid } from "@/components/feature-grid"

import { PricingCards } from "@/components/pricing-cards"
import { Testimonial } from "@/components/testimonial"

import {TerminalAnimation} from '@/components/TerminalAnimation';

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full min-h-[calc(100vh-65px)]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row lg:space-x-2 min-h-[calc(100vh-65px)] lg:min-h-0">

              <div className="w-full lg:w-5/12 min-h-screen lg:min-h-0 flex flex-col justify-center sticky top-0 lg:relative pt-16 lg:pt-0">

                <div className="space-y-2 mb-6">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secrets Management That Finally Makes Sense
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The fastest, most secure way to manage environment variables and sensitive data across your entire development lifecycle.
                  </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="gap-1">
                    <Link href="/signup">
                      Start Securing for Free <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/docs">View Documentation</Link>
                  </Button>
                </div>

              </div>

              {/* Terminal animation section */}
              <div className="w-full lg:w-7/12 min-h-screen lg:min-h-0 flex items-center justify-center">
                <TerminalAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="w-full min-h-[calc(100vh-65px)] flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Your application's secrets are likely <strong>exposed</strong> right now. <br />Environment variables, .env, application.properties files, and basic encryption leave backdoors wide open to attackers — precisely where hackers focus their efforts first, targeting the keys to your entire kingdom.<br />
                Qalá closes these gaps with bank-grade security that works silently behind the scenes—with virtually zero changes to your existing code.
                </p>
              </div>
              <div className="gap-2 flex flex-row">
              <Button asChild variant="outline" size="lg">
                <Link href="/docs">Read Full Post</Link>
              </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/docs">Explore White Paper</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-24 min-h-[calc(100vh-65px)] flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Main Benefits</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Designed for developers who value security without sacrificing productivity
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
              <Card className="backdrop-blur-sm border-primary/20">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your secrets never leave your infrastructure unencrypted. With ECC-based key exchange and
                    AES-256-GCM, we provide bank-level security with developer-friendly simplicity.
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm border-primary/20">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deploy anywhere with native support for Docker, Vercel, GitHub Actions, and more. One command to
                    secure your entire stack.
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm border-primary/20">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Developer Experience First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No more passing .env files through Slack. No more accidental commits of API keys. Just qala run and
                    you're done.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-12 md:py-24 lg:py-24 bg-muted min-h-[calc(100vh-65px)]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need for secure secrets management
                </p>
              </div>
            </div>
            <FeatureGrid />
          </div>
        </section>

        {/* Competitor Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-24 min-h-[calc(100vh-65px)]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Compare Qalá</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how Qalá stacks up against other secrets management solutions
                </p>
              </div>
            </div>
            <div className="mt-12 overflow-auto">
              <ComparisonTable />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-24 bg-muted min-h-[calc(100vh-65px)]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start free, scale securely. From solo developers to enterprise teams, Qalá grows with you.
                </p>
              </div>
            </div>
            <PricingCards />
          </div>
        </section>

        {/* Testimonial */}
        <section className="hidden w-full py-12 md:py-24 lg:py-24">
          <div className="container flex items-center justify-center">
            <Testimonial />
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-dark w-full py-12 md:py-24 lg:py-24 min-h-[calc(100vh-65px)] flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to secure your secrets?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of developers who trust Qalá with their most sensitive data.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/signup">
                    Start Securing for Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
