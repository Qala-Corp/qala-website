import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function UpgradeGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-6 lg:py-12">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Upgrade Guide</h1>
          <div className="space-y-6">
            <p>
              This guide will help you upgrade to the latest version of Qalá. Please follow these steps carefully to
              ensure a smooth upgrade process.
            </p>
            <h2 className="text-2xl font-bold">Upgrading to v0.9.5</h2>
            <h3 className="text-xl font-semibold">Step 1: Backup Your Data</h3>
            <p>
              Before upgrading, it's crucial to backup your current Qalá configuration and data. Run the following
              command:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>qala backup --output ./qala-backup-$(date +%Y%m%d).json</code>
            </pre>
            <h3 className="text-xl font-semibold">Step 2: Update Qalá CLI</h3>
            <p>To update the Qalá CLI to the latest version, run:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>npm install -g qala@latest</code>
            </pre>
            <h3 className="text-xl font-semibold">Step 3: Verify the Installation</h3>
            <p>Verify that the new version is installed correctly:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>qala --version</code>
            </pre>
            <p>This should display version 0.9.5 or higher.</p>
            <h3 className="text-xl font-semibold">Step 4: Update Your Configuration</h3>
            <p>
              Some configuration options may have changed in this version. Run the following command to update your
              configuration file:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>qala config update</code>
            </pre>
            <h3 className="text-xl font-semibold">Step 5: Migrate Your Data</h3>
            <p>If you're upgrading from a version earlier than 0.9.0, you'll need to migrate your data. Run:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>qala migrate</code>
            </pre>
            <h2 className="text-2xl font-bold">Breaking Changes</h2>
            <p>Please be aware of the following breaking changes in v0.9.5:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The <code>qala list</code> command now returns paginated results by default. Use{" "}
                <code>--no-paginate</code> to get the old behavior.
              </li>
              <li>
                The Docker integration now requires explicit permission to access secrets. Update your Docker
                configurations accordingly.
              </li>
              <li>The minimum supported Node.js version is now 14.0.0.</li>
            </ul>
            <h2 className="text-2xl font-bold">Need Help?</h2>
            <p>
              If you encounter any issues during the upgrade process, please check our{" "}
              <Link href="/docs/troubleshooting" className="text-primary hover:underline">
                troubleshooting guide
              </Link>{" "}
              or reach out to our support team.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

