import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function CoreConceptsPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Core Concepts</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>This guide explains the fundamental concepts and architecture of Qalá's secrets management system.</p>

            <h2>Secrets Management Fundamentals</h2>

            <h3>What is a Secret?</h3>
            <p>
              In Qalá, a <strong>secret</strong> is any sensitive information that needs protection, including:
            </p>
            <ul>
              <li>API keys and tokens</li>
              <li>Database credentials</li>
              <li>Private keys and certificates</li>
              <li>Connection strings</li>
              <li>Configuration values with security implications</li>
            </ul>

            <h3>The Secret Lifecycle</h3>
            <p>Every secret in Qalá follows a lifecycle:</p>
            <ol>
              <li>
                <strong>Creation</strong>: Initial secure generation or storage
              </li>
              <li>
                <strong>Access</strong>: Controlled retrieval and usage
              </li>
              <li>
                <strong>Rotation</strong>: Periodic or event-triggered updates
              </li>
              <li>
                <strong>Revocation</strong>: Controlled invalidation
              </li>
              <li>
                <strong>Deletion</strong>: Secure removal from storage
              </li>
            </ol>

            <h2>Qalá Architecture</h2>

            <h3>System Components</h3>
            <p>Qalá consists of several core components:</p>
            <ul>
              <li>
                <strong>Client SDK</strong>: Libraries for different programming languages
              </li>
              <li>
                <strong>CLI</strong>: Command-line interface for developers
              </li>
              <li>
                <strong>API Server</strong>: Central service managing secret storage and retrieval
              </li>
              <li>
                <strong>Storage Backend</strong>: Encrypted persistent storage
              </li>
              <li>
                <strong>Auth Service</strong>: Authentication and authorization
              </li>
            </ul>

            {/* Continue with the rest of the content... */}

            <h2>Next Steps</h2>
            <p>Now that you understand Qalá's core concepts, you can explore:</p>
            <ul>
              <li>
                <Link href="/docs/quick-start" className="text-primary hover:underline">
                  Quick Start Guide
                </Link>{" "}
                for practical implementation
              </li>
              <li>
                <Link href="/docs/best-practices" className="text-primary hover:underline">
                  Best Practices
                </Link>{" "}
                for security optimization
              </li>
              <li>
                <Link href="/docs/api-reference" className="text-primary hover:underline">
                  API Reference
                </Link>{" "}
                for integration details
              </li>
              <li>
                <Link href="/docs/guides" className="text-primary hover:underline">
                  Guides
                </Link>{" "}
                for sophisticated use cases
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

