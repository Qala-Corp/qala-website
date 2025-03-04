import Link from "next/link"
import { Book, HelpCircle, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Qalá Support
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're here to help you get the most out of Qalá. Choose the support option that works best for you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Book className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Comprehensive guides and API references</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Find detailed information about Qalá features, integrations, and best practices.
                  </p>
                  <Button asChild>
                    <Link href="/docs">View Docs</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Community Forums</CardTitle>
                  <CardDescription>Get help from the Qalá community</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Ask questions, share your experiences, and connect with other Qalá users.</p>
                  <Button asChild>
                    <Link href="https://community.qala.com">Visit Forums</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HelpCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription>Quick answers to common questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Find solutions to frequently asked questions about Qalá usage and features.</p>
                  <Button asChild>
                    <Link href="/docs/faq">View FAQ</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Phone className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Enterprise Support</CardTitle>
                  <CardDescription>Dedicated support for enterprise customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Get priority support, custom integrations, and personalized assistance.</p>
                  <Button asChild>
                    <Link href="/enterprise">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contact Us</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="mb-4">Can't find what you're looking for? Our support team is here to help.</p>
              <Button asChild size="lg">
                <Link href="mailto:support@qala.com">Email Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

