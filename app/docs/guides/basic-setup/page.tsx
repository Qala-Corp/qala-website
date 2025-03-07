import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function BasicSetupGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/docs/guides">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Guides
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Basic Setup Guide</h1>
          <div className="prose dark:prose-invert max-w-none">{/* Add the basic setup guide content here */}</div>
        </div>
      </main>
    </div>
  )
}

