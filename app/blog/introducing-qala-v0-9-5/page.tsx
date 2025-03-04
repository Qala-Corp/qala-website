import Link from "next/link"
import { ArrowLeft, CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function IntroducingQalaV095Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container max-w-3xl py-6 lg:py-12">
          <div className="space-y-4">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Introducing Qalá v0.9.5</h1>
            <p className="text-muted-foreground">
              <CalendarDays className="inline mr-1" /> May 15, 2023
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <p>
              We're thrilled to announce the release of Qalá v0.9.5, a significant milestone on our journey to 1.0. This
              version brings several exciting improvements and new features that enhance your secret management
              experience.
            </p>
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Enhanced Docker Integration:</strong> We've significantly improved our Docker support, making it
                easier than ever to manage secrets in containerized environments. New features include automatic secret
                injection into containers and improved Docker Compose support.
              </li>
              <li>
                <strong>Improved Secret Rotation:</strong> Our secret rotation capabilities have been expanded with new
                automation options. You can now set up custom rotation schedules and integrate with your existing
                workflows more seamlessly.
              </li>
              <li>
                <strong>New CLI Commands:</strong> We've added several new CLI commands to streamline your secret
                management tasks. These include quick secret creation, bulk import/export, and enhanced filtering
                options.
              </li>
              <li>
                <strong>Performance Optimizations:</strong> For those managing large-scale deployments, you'll notice
                significant performance improvements. We've optimized our backend to handle larger volumes of secrets
                with reduced latency.
              </li>
            </ul>
            <h2 className="text-2xl font-bold">What's Next?</h2>
            <p>
              As we approach our 1.0 release, we're focusing on stability, documentation, and gathering user feedback.
              We encourage you to try out these new features and let us know your thoughts. Your input is crucial in
              shaping the future of Qalá.
            </p>
            <h2 className="text-2xl font-bold">Getting Started</h2>
            <p>
              To upgrade to v0.9.5, simply run <code>npm install -g qala@latest</code> or check our{" "}
              <Link href="/docs/upgrade-guide" className="text-primary hover:underline">
                upgrade guide
              </Link>{" "}
              for detailed instructions.
            </p>
            <p>
              Thank you for your continued support and trust in Qalá. We're excited to see what you'll build with these
              new capabilities!
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

