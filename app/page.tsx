import Link from "next/link"
import { ArrowRight, Package, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ComparisonTable } from "@/components/comparison-table"
import { FeatureGrid } from "@/components/feature-grid"

import { PricingCards } from "@/components/pricing-cards"
import { Testimonial } from "@/components/testimonial"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secrets Management That Finally Makes Sense
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The fastest, most secure way to manage environment variables and sensitive data across your entire
                    development lifecycle.
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
              <div className="flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px] rounded-lg border bg-background p-4 shadow-lg">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-muted rounded-t-lg border-b flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs font-mono text-muted-foreground">Terminal</div>
                  </div>
                  <pre className="mt-10 font-mono text-sm text-green-500">
                    <code>
                    {`
# Install Qalá
$ npm i qala

# Initialize Qalá in your project
$ qala init

# Authenticate and sync secrets
$ qala auth

# Import production secrets
$ qala import .env.production

# Now use it anywhere, system is language-agnostic
node -e "

// ✧ Magic happens here ✧
const app = require('qala')();

// Use secrets exactly like before
app.get('/api/data', async (req, res) => {
  const apiKey = process.env.API_KEY;

  const data = await fetchData(apiKey);
  return res.json(data);
});

"
`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <Testimonial />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
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
                <Button asChild size="lg" variant="secondary" className="gap-1">
                  <Link href="/signup">
                    Start Securing for Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
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
