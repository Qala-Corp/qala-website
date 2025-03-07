import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuickStartGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Quick Start Guide</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Get up and running with Qalá in minutes. This guide walks you through installation, initial setup, and
              your first secret management tasks.
            </p>
            <h2 id="installation">Installation</h2>
            <br />{" "}
            <strong>
              <h3 id="cli-installation">CLI Installation</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Install the CLI globally
npm install -g qala
# Verify installation
qala --version`}</code>
            </pre>
            <br />{" "}
            <strong>
              <h3 id="node.js-integration">Node.js Integration</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Add to your project
npm install qala --save
# TypeScript definitions included`}</code>
            </pre>
            <br />
            <br />
              <strong><h2 id="generate-api-key">Initial Setup</h2>
              <br />
            <h3 id="initial-setup">1. Create an Account</h3>
              </strong>
            <p>
              Sign up at{" "}
              <a href="https://app.qala-security.com/signup" className="text-primary hover:underline">
                app.qala-security.com
              </a>{" "}
              or set up a self-hosted instance.
            </p>
            <br />{" "}
            <strong>
              <h3 id="generate-api-key">2. Generate API Key</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Generate via CLI if self-hosted
qala auth generate-key --name "Development Key"
# Or generate in web dashboard:
# Settings → API Keys → Generate New Key`}</code>
            </pre>
            <p>Save your API key securely - it will only be shown once.</p>
            <br />{" "}
            <strong>
              <h3 id="initialize-your-project">3. Initialize Your Project</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Interactive setup
qala init
# Non-interactive setup
qala init --project-name "My Project" --env development`}</code>
            </pre>
            <p>
              This creates a <code className="text-sm text-foreground">.qala.json</code> configuration file in your
              project directory.
            </p>
            <h2 id="managing-secrets">Managing Secrets</h2>
            <br />{" "}
            <strong>
              <h3 id="adding-secrets">Adding Secrets</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Add a single secret
qala secret add DATABASE_URL --value "postgresql://user:password@localhost:5432/db"
# Add multiple secrets from a file
qala secret import --file ./secrets.json
# Generate a secure random value
qala secret generate API_KEY --length 32`}</code>
            </pre>
            <br />{" "}
            <strong>
              <h3 id="retrieving-secrets">Retrieving Secrets</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Get a specific secret
qala secret get DATABASE_URL
# List all secret names (without values)
qala secret list
# Export to .env format
qala secret export > .env.production`}</code>
            </pre>
            <br />{" "}
            <strong>
              <h3 id="updating-secrets">Updating Secrets</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Update an existing secret
qala secret update DATABASE_URL --value "postgresql://user:password@newhost:5432/db"
# Update with editor
qala secret edit DATABASE_URL`}</code>
            </pre>
            <br />{" "}
            <strong>
              <h3 id="deleting-secrets">Deleting Secrets</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Remove a secret
qala secret remove DATABASE_URL
# Remove multiple secrets
qala secret remove API_KEY JWT_SECRET`}</code>
            </pre>
            <h2 id="using-secrets-in-applications">Using Secrets in Applications</h2>
            <br />{" "}
            <strong>
              <h3 id="node.js-applications">Node.js Applications</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="language-javascript text-sm text-foreground">
                {`const { QalaClient } = require('qala');

// Initialize client
const qala = new QalaClient();

async function main() {
  // Authenticate (using API key from env or config file)
  await qala.authenticate();

  // Get a secret
  const dbUrl = await qala.getSecret('DATABASE_URL');

  // Use the secret
  const db = connect(dbUrl);
}

main().catch(console.error);`}
              </code>
            </pre>
            <br />{" "}
            <strong>
              <h3 id="running-applications-with-secrets">Running Applications with Secrets</h3>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Inject secrets as environment variables
qala run -- node server.js
# Or with npm scripts
qala run -- npm start`}</code>
            </pre>
            <br />{" "}
            <strong>
              <h2 id="working-with-environments">Working with Environments</h2>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Switch environment
qala env use production
# Add a secret to a specific environment
qala secret add API_KEY --value "prod-key" --env production
# Compare environments
qala env diff development production`}</code>
            </pre>
            <br />{" "}
            <strong>
              <h2 id="collaborating-with-teams">Collaborating with Teams</h2>
            </strong>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">{`# Invite team member (Team plan+)
qala team invite team@example.com
# Share specific secrets
qala secret share DATABASE_URL --with user@example.com
# View access history
qala audit list --secret DATABASE_URL`}</code>
            </pre>
            <br />
            <strong><h2 id="next-steps">Next Steps</h2></strong>
            <ul className="gap-y-1 flex flex-col">
              <li>1.
                Configure{" "}
                <Link href="/docs/guides/ci-cd" className="text-primary hover:underline">
                  CI/CD integration
                </Link>
              </li>
              <li>2.
                Set up{" "}
                <Link href="/docs/guides/docker" className="text-primary hover:underline">
                  Docker deployment
                </Link>
              </li>
              <li>3.
                Implement{" "}
                <Link href="/docs/guides/rotation" className="text-primary hover:underline">
                  secret rotation
                </Link>
              </li>
              <li>4. 
                Explore{" "}
                <Link href="/docs/security" className="text-primary hover:underline">
                  advanced security features
                </Link>
              </li>
            </ul>
            <br />
            <strong><h2 id="troubleshooting">Troubleshooting</h2></strong>
            <p>If you encounter issues:</p>
              <ul className="gap-y-1 flex flex-col">
              <li>*
                Check the <code className="text-sm text-foreground">.qala.json</code> configuration file
              </li>
              <li>* Ensure your API key has the necessary permissions</li>
              <li>*
                Run <code className="text-sm text-foreground">qala doctor</code> to diagnose common problems
              </li>
              <li>*
                Visit our{" "}
                <a href="https://community.qala-security.com" className="text-primary hover:underline">
                  community forum
                </a>{" "}
                for help
              </li>
            </ul>
            <p>
              For additional assistance, contact{" "}
              <a href="mailto:support@qala-security.com" className="text-primary hover:underline">
                support@qala-security.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
