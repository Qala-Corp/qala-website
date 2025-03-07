import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <div className="container max-w-3xl py-6 lg:py-12">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Frequently Asked Questions</h1>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">General Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">What is Qalá?</h3>
                <p>
                  Qalá is a secure secrets management platform designed to help developers and organizations manage
                  sensitive information across their development lifecycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Is Qalá open source?</h3>
                <p>
                  Qalá follows an open core model. The core functionality is open source, while some advanced features
                  are part of our enterprise offerings. You can find our open source repositories on our{" "}
                  <Link href="https://github.com/qala" className="text-primary hover:underline">
                    GitHub page
                  </Link>
                  .
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Technical Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">What encryption does Qalá use?</h3>
                <p>Qalá uses industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I use Qalá with my existing CI/CD pipeline?</h3>
                <p>
                  Yes, Qalá integrates with most popular CI/CD tools including Jenkins, GitLab CI, and GitHub Actions.
                  Check our{" "}
                  <Link href="/docs/integrations" className="text-primary hover:underline">
                    integrations documentation
                  </Link>{" "}
                  for more details.
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Pricing and Support</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Is there a free tier?</h3>
                <p>
                  Yes, we offer a free tier for individual developers and small teams. You can find more information on
                  our{" "}
                  <Link href="/pricing" className="text-primary hover:underline">
                    pricing page
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">How can I get support?</h3>
                <p>
                  We offer community support through our forums, and paid support plans for our enterprise customers.
                  Visit our{" "}
                  <Link href="/support" className="text-primary hover:underline">
                    support page
                  </Link>{" "}
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

