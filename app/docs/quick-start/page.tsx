import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function QuickStartGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Quick Start Guide</h1>
          <div className="prose dark:prose-invert max-w-none">
            {/* Insert the Quick Start Guide content here */}
            <p>
              Get up and running with Qalá in minutes. This guide walks you through installation, initial setup, and
              your first secret management tasks.
            </p>

            {/* Rest of the content... */}
          </div>
        </div>
      </main>
    </div>
  )
}

