import Link from "next/link"
import { ArrowLeft, CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function QalaOpenSourceCommitmentPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Qalá's Commitment to Open Source</h1>
            <p className="text-muted-foreground">
              <CalendarDays className="inline mr-1" /> March 10, 2023
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <p>
              At Qalá, we strongly believe in the power of open source software. It's not just a development
              methodology; it's a philosophy that drives innovation, collaboration, and transparency. Today, we want to
              share our journey in open source and our plans for the future.
            </p>
            <h2 className="text-2xl font-bold">Our Open Core Model</h2>
            <p>
              Qalá follows an open core model, which means the core functionality of our product is open source and
              freely available. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Basic secret management features</li>
              <li>CLI tools for interacting with Qalá</li>
              <li>Core integrations with popular tools and platforms</li>
              <li>Documentation and guides</li>
            </ul>
            <p>
              Our enterprise offerings build upon this open core, providing additional features, support, and services
              for organizations with more complex needs.
            </p>
            <h2 className="text-2xl font-bold">Recent Contributions to the Community</h2>
            <p>We're proud of our recent contributions to the open source community:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Released our core library under the MIT license</li>
              <li>Contributed improvements to several popular open source CI/CD tools</li>
              <li>Sponsored and participated in open source security initiatives</li>
              <li>Shared our learnings through blog posts, talks, and workshops</li>
            </ul>
            <h2 className="text-2xl font-bold">Upcoming Open Source Initiatives</h2>
            <p>We're excited about our plans for the future:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expanding our core open source offerings</li>
              <li>Launching a community contribution program</li>
              <li>Developing new integrations with other open source tools</li>
              <li>Increasing our involvement in open source security standards</li>
            </ul>
            <h2 className="text-2xl font-bold">How You Can Get Involved</h2>
            <p>We welcome contributions from the community! Here's how you can get involved:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check out our GitHub repository and contribute code or documentation</li>
              <li>Report issues or suggest features</li>
              <li>Participate in our community forums and discussions</li>
              <li>Spread the word about Qalá and open source secret management</li>
            </ul>
            <p>
              Visit our{" "}
              <Link href="/community" className="text-primary hover:underline">
                community page
              </Link>{" "}
              to learn more about how you can contribute to Qalá's open source efforts.
            </p>
            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p>
              Our commitment to open source is unwavering. We believe that by working together with the community, we
              can create better, more secure solutions for everyone. Thank you for your support and interest in Qalá's
              open source journey.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

