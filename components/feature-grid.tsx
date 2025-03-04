import { Check, Globe, Lock, Server, Shield, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>Multi-Environment Support</CardTitle>
          <CardDescription>Manage dev, staging, and production environments with clear separation.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Environment-specific secrets</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Inheritance between environments</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Automatic environment detection</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>Team Collaboration</CardTitle>
          <CardDescription>Granular access controls that won't slow your team down.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Role-based access control</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Secret sharing between teams</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Approval workflows</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>Compliance Ready</CardTitle>
          <CardDescription>Built for GDPR, SOC 2, and ISO 27001 requirements from day one.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Compliance reporting</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Data residency options</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Encryption at rest and in transit</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Server className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>Zero Effort Deployment</CardTitle>
          <CardDescription>Deploy anywhere with native support for popular platforms.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Vercel integration</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Docker support</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">GitHub Actions integration</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>Audit Logs</CardTitle>
          <CardDescription>Track every access and change with detailed logs and alerts.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Comprehensive audit trail</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Real-time alerts</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Export and retention options</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="M8 11h8" />
              <path d="M8 15h8" />
              <path d="M11 8h2" />
            </svg>
          </div>
          <CardTitle>Open Source</CardTitle>
          <CardDescription>
            Core components are open source for transparency and community contributions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Open core model</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Community contributions</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm">Transparent security practices</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

