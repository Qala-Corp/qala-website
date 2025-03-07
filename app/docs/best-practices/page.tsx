import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function BestPracticesPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Qalá Best Practices</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>This guide outlines best practices for using Qalá to manage your secrets securely and efficiently.</p>

            <h2 id="setting-up-your-environment">Setting Up Your Environment</h2>

            <h3 id="project-organization">Project Organization</h3>
            <ul>
              <li>
                <strong>Use meaningful project names</strong>: Choose descriptive names that reflect your application or
                service.
              </li>
              <li>
                <strong>Create separate projects for distinct applications</strong>: This ensures better access control
                and minimizes cross-contamination risk.
              </li>
              <li>
                <strong>Document your project structure</strong>: Add descriptions to projects that clarify their
                purpose.
              </li>
            </ul>

            <h3 id="environment-configuration">Environment Configuration</h3>
            <ul>
              <li>
                <strong>Create environments that mirror your deployment pipeline</strong>: Typical environments include:
                <ul>
                  <li>
                    <code>development</code> - For local development
                  </li>
                  <li>
                    <code>staging</code> - For pre-production testing
                  </li>
                  <li>
                    <code>production</code> - For live application use
                  </li>
                </ul>
              </li>
              <li>
                <strong>Restrict access to production environments</strong>: Limit the number of team members who can
                access production secrets.
              </li>
              <li>
                <strong>Use consistent naming conventions</strong> across environments to ensure smooth transitions.
              </li>
            </ul>

            <h2 id="secret-management">Secret Management</h2>

            <h3 id="naming-conventions">Naming Conventions</h3>
            <ul>
              <li>
                <strong>Use descriptive names</strong>: Choose names that clearly indicate the purpose of the secret.
              </li>
              <li>
                <strong>Use consistent prefixes</strong>: For example, <code>DB_*</code> for database credentials,{" "}
                <code>API_*</code> for API keys.
              </li>
              <li>
                <strong>Avoid using actual values in names</strong>: Never include sensitive data in the secret name
                itself.
              </li>
            </ul>

            <h3 id="value-security">Value Security</h3>
            <ul>
              <li>
                <p>
                  <strong>Generate strong secrets</strong>: Use high-entropy values for passwords and keys.
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`&lt;SERVICE&gt;_&lt;TYPE&gt;_&lt;ENVIRONMENT&gt;_&lt;DETAIL&gt;`}</code>
                </pre>
              </li>
              <li>
                <p>
                  <strong>Avoid hardcoding secrets</strong>: Never commit secrets to source code repositories.
                </p>
              </li>
              <li>
                <p>
                  <strong>Use the secret rotation feature</strong> for credentials that require periodic updates.
                </p>
              </li>
            </ul>

            <h3 id="secret-descriptions">Secret Descriptions</h3>
            <ul>
              <li>
                <strong>Add detailed descriptions</strong>: Include information about:
                <ul>
                  <li>What the secret is used for</li>
                  <li>Who owns or manages the external service</li>
                  <li>When it was last updated manually</li>
                  <li>Any expiration dates</li>
                </ul>
              </li>
            </ul>

            <h2 id="integration-with-applications">Integration with Applications</h2>

            <h3 id="direct-api-integration">Direct API Integration</h3>
            <p>When integrating Qalá directly with your application code:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`&lt;SERVICE&gt;_&lt;TYPE&gt;_&lt;ENVIRONMENT&gt;_&lt;DETAIL&gt;`}</code>
            </pre>

            <h3 id="local-development">Local Development</h3>
            <p>For local development:</p>
            <ol>
              <li>
                <p>
                  <strong>Use the CLI to export secrets to .env file</strong>:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`&lt;SERVICE&gt;_&lt;TYPE&gt;_&lt;ENVIRONMENT&gt;_&lt;DETAIL&gt;`}</code>
                </pre>
              </li>
              <li>
                <p>
                  <strong>Use .env files with gitignore</strong>: Add <code>.env</code> to your <code>.gitignore</code>{" "}
                  file.
                </p>
              </li>
              <li>
                <p>
                  <strong>Use the vault for offline development</strong>:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`&lt;SERVICE&gt;_&lt;TYPE&gt;_&lt;ENVIRONMENT&gt;_&lt;DETAIL&gt;`}</code>
                </pre>
              </li>
            </ol>

            <h2 id="security-best-practices">Security Best Practices</h2>

            <h3 id="api-keys-and-authentication">API Keys and Authentication</h3>
            <ul>
              <li>
                <strong>Rotate API keys regularly</strong>: Create a schedule for key rotation.
              </li>
              <li>
                <strong>Use the most restrictive permissions necessary</strong>: Don't use admin credentials for
                read-only operations.
              </li>
              <li>
                <strong>Set environment variables for API keys</strong>: Never hardcode them in your application.
              </li>
            </ul>

            <h3 id="access-control">Access Control</h3>
            <ul>
              <li>
                <strong>Implement the principle of least privilege</strong>: Give users access only to what they need.
              </li>
              <li>
                <strong>Audit access regularly</strong>: Review who has access to which projects and environments.
              </li>
              <li>
                <strong>Revoke access immediately</strong> when team members change roles or leave the organization.
              </li>
            </ul>

            <h3 id="monitoring-and-logging">Monitoring and Logging</h3>
            <ul>
              <li>
                <strong>Enable access logging</strong>: Track when and who accesses secrets.
              </li>
              <li>
                <strong>Review logs periodically</strong>: Look for unusual access patterns.
              </li>
              <li>
                <strong>Set up alerts</strong> for suspicious activity.
              </li>
            </ul>

            <h2 id="cicd-integration">CI/CD Integration</h2>

            <h3 id="github-actions">GitHub Actions</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="language-yaml">{`&lt;SERVICE&gt;_&lt;TYPE&gt;_&lt;ENVIRONMENT&gt;_&lt;DETAIL&gt;`}</code>
            </pre>

            <h3 id="jenkins">Jenkins</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="language-groovy">
                {`&lt;SERVICE&gt;_&lt;TYPE&gt;_&lt;ENVIRONMENT&gt;_&lt;DETAIL&gt;`}
              </code>
            </pre>

            <h2 id="troubleshooting">Troubleshooting</h2>

            <h3 id="common-issues">Common Issues</h3>
            <ol>
              <li>
                <strong>Authentication failures</strong>:
                <ul>
                  <li>Ensure your API key or credentials are correct</li>
                  <li>Check token expiration</li>
                  <li>Verify network connectivity to the API server</li>
                </ul>
              </li>
              <li>
                <strong>Missing secrets</strong>:
                <ul>
                  <li>Verify the secret exists in the correct environment</li>
                  <li>Check access permissions for the authenticated user</li>
                  <li>Ensure correct project ID and environment name</li>
                </ul>
              </li>
              <li>
                <strong>Local vault issues</strong>:
                <ul>
                  <li>
                    Ensure the vault is initialized: <code>qala vault init</code>
                  </li>
                  <li>
                    Check for file permission issues in the <code>.qala</code> directory
                  </li>
                  <li>
                    Try re-syncing: <code>qala vault sync</code>
                  </li>
                </ul>
              </li>
            </ol>

            <h3 id="getting-support">Getting Support</h3>
            <p>If you encounter issues that you can't resolve:</p>
            <ol>
              <li>
                Check the{" "}
                <a href="https://docs.qala-security.com" className="text-primary hover:underline">
                  Qalá documentation
                </a>
              </li>
              <li>
                Contact support at{" "}
                <a href="mailto:support@qala-security.com" className="text-primary hover:underline">
                  support@qala-security.com
                </a>
              </li>
              <li>Include error messages, steps to reproduce, and environment details</li>
            </ol>

            <h2 id="performance-optimization">Performance Optimization</h2>
            <ul>
              <li>
                <strong>Cache secrets locally</strong> for short periods to reduce API calls
              </li>
              <li>
                <strong>Batch secret retrievals</strong> where possible
              </li>
              <li>
                <strong>Use local vault for offline operations</strong>
              </li>
              <li>
                <strong>Initialize QalaClient once</strong> at application startup
              </li>
            </ul>

            <h2 id="migration-strategies">Migration Strategies</h2>

            <h3 id="from-environment-variables">From Environment Variables</h3>
            <ol>
              <li>
                <p>
                  Export your current <code>.env</code> files
                </p>
              </li>
              <li>
                <p>Import them into Qalá:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`&lt;SERVICE&gt;_&lt;TYPE&gt;_&lt;ENVIRONMENT&gt;_&lt;DETAIL&gt;`}</code>
                </pre>
              </li>
              <li>
                <p>Update application code to use Qalá client</p>
              </li>
            </ol>

            <h3 id="from-other-secret-managers">From Other Secret Managers</h3>
            <ol>
              <li>Export secrets from your current solution</li>
              <li>Transform them to Qalá format if necessary</li>
              <li>Import into Qalá using the CLI or API</li>
              <li>Test thoroughly before removing the original solution</li>
            </ol>

            <h2 id="compliance-and-auditing">Compliance and Auditing</h2>
            <ul>
              <li>
                <strong>Document your secret management processes</strong>
              </li>
              <li>
                <strong>Use access logs for compliance reporting</strong>
              </li>
              <li>
                <strong>Create rotation schedules for regulated credentials</strong>
              </li>
              <li>
                <strong>Perform regular access audits</strong>
              </li>
            </ul>

            <p>
              By following these best practices, you'll ensure that your secrets are securely managed and effectively
              utilized throughout your organization.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
