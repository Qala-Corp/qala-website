import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function APIReferencePage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">API Reference</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This document provides a comprehensive reference for the Qalá API, detailing the available endpoints and
              functionality for secure secret management.
            </p>

            <h2>Base URL</h2>
            <p>
              All API requests should be made to: <code>https://api.qala-security.com</code>
            </p>

            <h2>Authentication</h2>
            <p>Qalá API uses JWT token-based authentication. You can authenticate using either:</p>

            <h3>Login with Email and Password</h3>
            <pre>
              <code>POST /auth/login</code>
            </pre>

            {/* Continue with the rest of the API reference content... */}
          </div>
        </div>
      </main>
    </div>
  )
}

