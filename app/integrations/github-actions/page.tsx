import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function GitHubActionsIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Qalá + GitHub Actions Integration
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Secure your CI/CD workflows with Qalá's GitHub Actions integration
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#setup">Get Started</Link>
                </Button>
                <Button variant="outline">
                  <Link
                    href="https://docs.qala.com/integrations/github-actions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <CardTitle>Seamless GitHub Actions Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Easily use Qalá secrets in your GitHub Actions workflows without exposing them in your repository.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automatic Secret Rotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Rotate secrets used in your CI/CD pipelines automatically, enhancing security.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Environment-Specific Secrets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Manage different secrets for various environments (e.g., staging, production) in your workflows.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="setup" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Setup Guide</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li>Add the Qalá GitHub App to your repository</li>
              <li>Configure Qalá secrets for your repository</li>
              <li>Use the Qalá GitHub Action in your workflow</li>
              <li>Access Qalá-managed secrets in your GitHub Actions</li>
            </ol>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Example GitHub Actions Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Qalá secrets
        uses: qala/secrets-action@v1
        with:
          qala_api_key: \${{ secrets.QALA_API_KEY }}
      - name: Run tests
        run: npm test
        env:
          DB_PASSWORD: \${{ env.QALA_DB_PASSWORD }}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="https://docs.qala.com/integrations/github-actions/quickstart">
                  View Full GitHub Actions Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

