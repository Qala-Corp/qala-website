import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Guides</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Welcome to the Qalá guides. Here you'll find step-by-step instructions for common tasks and use cases.
            </p>
            <ul>
              <li>
                <Link href="/docs/guides/basic-setup">Basic Setup Guide</Link>
              </li>
              {/* Add more guide links here */}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
