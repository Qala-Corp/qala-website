import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function VercelIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Qalá + Vercel
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Seamlessly manage your secrets in Vercel deployments with Qalá
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#setup">Get Started</Link>
                </Button>
                <Button variant="outline">
                  <Link href="https://vercel.com/integrations/qala" className="flex flex-row items-center justify-center" target="_blank" rel="noopener noreferrer">
                    View on Vercel <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Native Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Qalá integrates directly with Vercel, providing a seamless experience for managing secrets.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automatic Syncing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Your secrets are automatically synced between Qalá and Vercel, ensuring consistency across
                    environments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Environment-Specific Secrets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Easily manage different secrets for development, preview, and production environments in Vercel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="setup" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Setup Guide</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li>Log in to your Vercel account</li>
              <li>Navigate to the Integrations marketplace</li>
              <li>Search for and select the Qalá integration</li>
              <li>Click "Add Integration" and follow the prompts to connect your Qalá account</li>
              <li>Select the Vercel projects you want to use with Qalá</li>
              <li>Start managing your secrets in Qalá - they'll automatically sync with Vercel</li>
            </ol>
            <div className="mt-8">
              <Button asChild>
                <Link href="https://vercel.com/integrations/qala">
                  Install Qalá Integration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
