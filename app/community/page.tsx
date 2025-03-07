import Link from "next/link"
import { Github, MessageCircle, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Join the Qalá Community
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with other developers, contribute to the project, and stay up to date with the latest Qalá
                  news.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Github className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>Contribute to Qalá's open source projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Check out our repositories, submit issues, and contribute code to help improve Qalá.
                  </p>
                  <Button asChild>
                    <Link href="https://github.com/qala">Visit GitHub</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Community Forums</CardTitle>
                  <CardDescription>Discuss and get help from the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Join our forums to ask questions, share your experiences, and connect with other Qalá users.
                  </p>
                  <Button asChild>
                    <Link href="https://community.qala.com">Join Forums</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Twitter className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Twitter</CardTitle>
                  <CardDescription>Follow us for the latest updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Stay up to date with the latest news, releases, and tips from the Qalá team.</p>
                  <Button asChild>
                    <Link href="https://twitter.com/qalaHQ">Follow @qalaHQ</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              How to Contribute
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p>We welcome contributions from the community! Here are some ways you can get involved:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Report bugs and suggest features on our GitHub issue tracker</li>
                <li>Contribute code by submitting pull requests</li>
                <li>Improve our documentation</li>
                <li>Help other users on our community forums</li>
                <li>Share your Qalá projects and use cases with the community</li>
              </ul>
              <p>
                Before contributing, please read our{" "}
                <Link href="/docs/contributing" className="text-primary hover:underline">
                  contribution guidelines
                </Link>{" "}
                to ensure a smooth collaboration process.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

