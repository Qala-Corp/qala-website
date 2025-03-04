import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PricingCards() {
  return (
    <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto mt-8">
      <TabsList className="grid w-[400px] grid-cols-2 mx-auto mb-8">
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
      </TabsList>
      <TabsContent value="monthly" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>For solo developers and small projects</CardDescription>
              <div className="mt-4 text-4xl font-bold">$0</div>
              <p className="text-sm text-muted-foreground">Forever free</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>10 secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>2 environments (dev, prod)</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>1 user</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Basic encryption</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>CLI access</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>30 days history</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Community support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>For small teams working together</CardDescription>
              <div className="mt-4 text-4xl font-bold">$15</div>
              <p className="text-sm text-muted-foreground">per month</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>50 secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>5 environments</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>5 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Team sharing</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Audit logs</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Webhooks</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>90 days history</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Email support (48h response)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Free Trial</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <div className="px-4 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full w-fit mb-2">
                POPULAR
              </div>
              <CardTitle>Business</CardTitle>
              <CardDescription>For growing businesses with advanced needs</CardDescription>
              <div className="mt-4 text-4xl font-bold">$45</div>
              <p className="text-sm text-muted-foreground">per month</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>200 secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited environments</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>15 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>SAML/SSO</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>IP restrictions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>1-year history</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Email support (24h response)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Free Trial</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations with custom requirements</CardDescription>
              <div className="mt-4 text-4xl font-bold">Custom</div>
              <p className="text-sm text-muted-foreground">Contact sales for pricing</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited environments</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Compliance reports</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Configurable retention</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Dedicated manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>SLA guarantees</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="annually" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>For solo developers and small projects</CardDescription>
              <div className="mt-4 text-4xl font-bold">$0</div>
              <p className="text-sm text-muted-foreground">Forever free</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>10 secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>2 environments (dev, prod)</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>1 user</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Basic encryption</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>CLI access</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>30 days history</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Community support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>For small teams working together</CardDescription>
              <div className="mt-4 text-4xl font-bold">$12</div>
              <p className="text-sm text-muted-foreground">per month, billed annually</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>50 secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>5 environments</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>5 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Team sharing</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Audit logs</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Webhooks</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>90 days history</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Email support (48h response)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Free Trial</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <div className="px-4 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full w-fit mb-2">
                POPULAR
              </div>
              <CardTitle>Business</CardTitle>
              <CardDescription>For growing businesses with advanced needs</CardDescription>
              <div className="mt-4 text-4xl font-bold">$36</div>
              <p className="text-sm text-muted-foreground">per month, billed annually</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>200 secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited environments</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>15 users</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>SAML/SSO</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>IP restrictions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>1-year history</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Email support (24h response)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Free Trial</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations with custom requirements</CardDescription>
              <div className="mt-4 text-4xl font-bold">Custom</div>
              <p className="text-sm text-muted-foreground">Contact sales for pricing</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited secrets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited environments</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Compliance reports</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Configurable retention</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>Dedicated manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                  <span>SLA guarantees</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}

