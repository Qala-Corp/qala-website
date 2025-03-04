import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function DockerIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Qalá + Docker Integration
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Secure your containerized applications with Qalá's Docker integration
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#setup">Get Started</Link>
                </Button>
                <Button variant="outline">
                  <Link href="https://docs.qala.com/integrations/docker" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Native Docker Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Qalá integrates seamlessly with Docker, allowing you to securely manage secrets in your containers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Runtime Secret Injection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Inject secrets into your containers at runtime, avoiding the need to bake secrets into images.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Docker Compose Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easily use Qalá with Docker Compose for multi-container applications.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="setup" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Setup Guide</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li>Install the Qalá CLI</li>
              <li>Authenticate the CLI with your Qalá account</li>
              <li>Add your secrets to Qalá</li>
              <li>Use the Qalá Docker plugin in your Dockerfile or docker-compose.yml</li>
              <li>Run your Docker containers with Qalá-managed secrets</li>
            </ol>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Example Dockerfile</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN qala init
CMD ["qala", "run", "--", "npm", "start"]`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="https://docs.qala.com/integrations/docker/quickstart">
                  View Full Docker Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

