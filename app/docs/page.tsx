import Link from "next/link"
import { Book, Code, FileText, Lightbulb, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { ClickableCard } from "@/components/ui/clickable-card"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Qalá Documentation
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Everything you need to know about using Qalá for secure secrets management
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#getting-started">Get Started</Link>
                </Button>
                <Button variant="outline">
                  <Link href="https://github.com/qala/docs" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="getting-started" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Documentation</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ClickableCard
                href="/docs/quick-start"
                title="Quick Start Guide"
                description="Get up and running with Qalá in minutes"
                icon={<Zap className="h-8 w-8" />}
              >
                <p>Learn how to install, configure, and start using Qalá.</p>
              </ClickableCard>
              <ClickableCard
                href="/docs/core-concepts"
                title="Core Concepts"
                description="Learn about the fundamental concepts of Qalá"
                icon={<Book className="h-8 w-8" />}
              >
                <p>Understand the architecture and key concepts behind Qalá.</p>
              </ClickableCard>
              <ClickableCard
                href="/docs/api-reference"
                title="API Reference"
                description="Detailed documentation of Qalá's API"
                icon={<Code className="h-8 w-8" />}
              >
                <p>Explore the Qalá API and learn how to integrate it into your applications.</p>
              </ClickableCard>
              <ClickableCard
                href="/docs/guides"
                title="Guides"
                description="Step-by-step guides for common use cases"
                icon={<FileText className="h-8 w-8" />}
              >
                <p>Find solutions to common problems and learn how to perform specific tasks.</p>
              </ClickableCard>
              <ClickableCard
                href="/docs/best-practices"
                title="Best Practices"
                description="Learn how to use Qalá effectively"
                icon={<Lightbulb className="h-8 w-8" />}
              >
                <p>Learn how to optimize your Qalá setup for security and efficiency.</p>
              </ClickableCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

