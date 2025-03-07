import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function EnterprisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Qalá Enterprise
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Advanced secrets management solutions for large-scale organizations
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="#contact">
                    Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/docs/enterprise">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Enterprise Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Advanced Access Controls</CardTitle>
                  <CardDescription>Fine-grained permissions and role-based access control</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Implement complex access policies and manage permissions at a granular level across your
                    organization.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Single Sign-On (SSO)</CardTitle>
                  <CardDescription>Seamless integration with your existing identity provider</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Support for SAML, OIDC, and other enterprise SSO solutions for secure and convenient authentication.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Audit and Compliance</CardTitle>
                  <CardDescription>Comprehensive logging and reporting capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Meet regulatory requirements with detailed audit logs, customizable retention policies, and
                    compliance reports.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>High Availability</CardTitle>
                  <CardDescription>Ensure continuous access to your secrets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Multi-region deployment options and automatic failover to guarantee uptime for critical operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Custom Integrations</CardTitle>
                  <CardDescription>Tailored solutions for your unique infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Work with our team to develop custom integrations that fit seamlessly into your existing workflows.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>Dedicated Support</CardTitle>
                  <CardDescription>Priority assistance from our expert team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Get personalized support, including onboarding assistance, training, and 24/7 emergency support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Contact our sales team to learn more about Qalá Enterprise and how we can help secure your
                  organization's secrets.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button asChild size="lg" className="w-full">
                  <Link href="mailto:enterprise@qala.com">
                    Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">Our team will get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

