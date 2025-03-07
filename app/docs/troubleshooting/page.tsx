import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function TroubleshootingGuidePage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Troubleshooting Guide</h1>
          <div className="space-y-6">
            <p>
              This guide covers common issues you might encounter while using Qalá and provides solutions to resolve
              them.
            </p>
            <h2 className="text-2xl font-bold">Common Issues</h2>
            <h3 className="text-xl font-semibold">1. Installation Fails</h3>
            <p>If you're having trouble installing Qalá, try the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure you have the latest version of Node.js installed</li>
              <li>
                Clear your npm cache: <code>npm cache clean --force</code>
              </li>
              <li>
                Try installing with the <code>--no-optional</code> flag: <code>npm install -g qala --no-optional</code>
              </li>
            </ul>
            <h3 className="text-xl font-semibold">2. Authentication Errors</h3>
            <p>If you're experiencing authentication issues:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify that your API key is correct and hasn't expired</li>
              <li>Ensure you're using the correct environment (development, staging, production)</li>
              <li>Check your network connection and firewall settings</li>
            </ul>
            <h3 className="text-xl font-semibold">3. Docker Integration Issues</h3>
            <p>For Docker-related problems:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make sure you've granted the necessary permissions in your Docker configuration</li>
              <li>Verify that the Qalá Docker plugin is installed and up-to-date</li>
              <li>Check the Docker logs for any error messages</li>
            </ul>
            <h2 className="text-2xl font-bold">Debugging</h2>
            <p>
              To get more information about an issue, you can run Qalá commands with the <code>--debug</code> flag:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>qala --debug [command]</code>
            </pre>
            <p>This will provide more detailed logs that can help identify the problem.</p>
            <h2 className="text-2xl font-bold">Still Need Help?</h2>
            <p>If you're still experiencing issues after trying these solutions, please:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Check our{" "}
                <Link href="/docs/faq" className="text-primary hover:underline">
                  FAQ
                </Link>{" "}
                for more information
              </li>
              <li>
                Visit our{" "}
                <Link href="/community" className="text-primary hover:underline">
                  community forums
                </Link>{" "}
                to see if others have encountered similar issues
              </li>
              <li>Contact our support team at support@qala.com</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

