import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function CoreConceptsPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Core Concepts</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>This guide explains the fundamental concepts and architecture of Qalá's secrets management system.</p>

            <h2 id="secrets-management-fundamentals">Secrets Management Fundamentals</h2>

            <h3 id="what-is-a-secret">What is a Secret?</h3>
            <p>
              In Qalá, a <strong>secret</strong> is any sensitive information that needs protection, including:
            </p>
            <ul>
              <li>API keys and tokens</li>
              <li>Database credentials</li>
              <li>Private keys and certificates</li>
              <li>Connection strings</li>
              <li>Configuration values with security implications</li>
            </ul>
            <p>Secrets are distinct from regular configuration by their sensitive nature and security requirements.</p>

            <h3 id="the-secret-lifecycle">The Secret Lifecycle</h3>
            <p>Every secret in Qalá follows a lifecycle:</p>
            <ol>
              <li>
                <strong>Creation</strong>: Initial secure generation or storage
              </li>
              <li>
                <strong>Access</strong>: Controlled retrieval and usage
              </li>
              <li>
                <strong>Rotation</strong>: Periodic or event-triggered updates
              </li>
              <li>
                <strong>Revocation</strong>: Controlled invalidation
              </li>
              <li>
                <strong>Deletion</strong>: Secure removal from storage
              </li>
            </ol>
            <p>Qalá provides tools to manage each stage of this lifecycle securely.</p>

            <h2 id="qalá-architecture">Qalá Architecture</h2>

            <h3 id="system-components">System Components</h3>
            <p>Qalá consists of several core components:</p>
            <ul>
              <li>
                <strong>Client SDK</strong>: Libraries for different programming languages
              </li>
              <li>
                <strong>CLI</strong>: Command-line interface for developers
              </li>
              <li>
                <strong>API Server</strong>: Central service managing secret storage and retrieval
              </li>
              <li>
                <strong>Storage Backend</strong>: Encrypted persistent storage
              </li>
              <li>
                <strong>Auth Service</strong>: Authentication and authorization
              </li>
            </ul>
            <p>These components work together to provide a comprehensive secrets management solution.</p>

            <h3 id="security-model">Security Model</h3>
            <p>Qalá's security is built on several principles:</p>

            <h4 id="end-to-end-encryption">End-to-End Encryption</h4>
            <p>All secrets are encrypted before transmission and remain encrypted at rest:</p>
            <ol>
              <li>Client-side encryption using AES-256-GCM</li>
              <li>TLS for all network communications</li>
              <li>Encrypted storage even in the backend database</li>
            </ol>

            <h4 id="multiple-authentication-methods">Multiple Authentication Methods</h4>
            <p>Qalá supports various authentication mechanisms:</p>
            <ul>
              <li>API keys for service accounts</li>
              <li>JWT tokens for users</li>
              <li>OAuth integration for SSO (Business/Enterprise)</li>
              <li>IP-based restrictions</li>
            </ul>

            <h4 id="access-control">Access Control</h4>
            <p>Fine-grained permissions control who can access which secrets:</p>
            <ul>
              <li>User-level permissions</li>
              <li>Team-based access</li>
              <li>Role-based access control (RBAC)</li>
              <li>Environment-based segmentation</li>
            </ul>

            <h2 id="key-concepts">Key Concepts</h2>

            <h3 id="projects">Projects</h3>
            <p>
              A <strong>project</strong> is the top-level organizational unit in Qalá, typically representing an
              application or service. Projects contain:
            </p>
            <ul>
              <li>A collection of secrets</li>
              <li>Environment configurations</li>
              <li>Team members and access controls</li>
              <li>Audit logs and settings</li>
            </ul>

            <h3 id="environments">Environments</h3>
            <p>
              <strong>Environments</strong> separate secrets for different deployment stages:
            </p>
            <ul>
              <li>Development</li>
              <li>Staging</li>
              <li>Production</li>
              <li>Custom environments</li>
            </ul>
            <p>Each environment has its own isolated set of secrets, allowing for proper separation of concerns.</p>

            <h3 id="secret-versioning">Secret Versioning</h3>
            <p>Qalá maintains a history of changes to each secret:</p>
            <ul>
              <li>Each update creates a new version</li>
              <li>Previous versions are retained based on policy</li>
              <li>Version history enables auditing and rollback</li>
            </ul>

            <h3 id="encryption-keys">Encryption Keys</h3>
            <p>Qalá uses a hierarchical key structure:</p>
            <ul>
              <li>
                <strong>Master Keys</strong>: Protect the key encryption keys
              </li>
              <li>
                <strong>Key Encryption Keys (KEKs)</strong>: Encrypt the data encryption keys
              </li>
              <li>
                <strong>Data Encryption Keys (DEKs)</strong>: Encrypt the actual secrets
              </li>
            </ul>
            <p>This structure enables secure key rotation and compartmentalization.</p>

            <h2 id="working-models">Working Models</h2>
            <p>Qalá supports different operational models to fit various needs:</p>

            <h3 id="standalone-mode">Standalone Mode</h3>
            <p>A complete, self-contained secrets management system:</p>
            <ul>
              <li>Independent server deployment</li>
              <li>Dedicated encryption keys</li>
              <li>Full control over all aspects</li>
            </ul>
            <p>Ideal for organizations requiring complete control of their security infrastructure.</p>

            <h3 id="integrated-mode">Integrated Mode</h3>
            <p>Designed to work alongside existing systems:</p>
            <ul>
              <li>Connects to existing authentication systems</li>
              <li>Can use external key management services</li>
              <li>Integrates with CI/CD pipelines</li>
            </ul>
            <p>Perfect for organizations with established security infrastructure.</p>

            <h3 id="environment-provider-mode">Environment Provider Mode</h3>
            <p>Focused solely on injecting secrets into applications:</p>
            <ul>
              <li>Lightweight deployment</li>
              <li>Minimal configuration</li>
              <li>Optimized for development workflows</li>
            </ul>
            <p>Best for development teams seeking simplicity.</p>

            <h2 id="best-practices-foundations">Best Practices Foundations</h2>
            <p>Understanding these core concepts enables effective implementation of best practices:</p>

            <h3 id="principle-of-least-privilege">Principle of Least Privilege</h3>
            <ul>
              <li>Grant minimal access required for each user/service</li>
              <li>Time-bound access when possible</li>
              <li>Regular access review</li>
            </ul>

            <h3 id="secret-isolation">Secret Isolation</h3>
            <ul>
              <li>Separate secrets by environment</li>
              <li>Unique secrets for different services</li>
              <li>Avoid secret reuse across projects</li>
            </ul>

            <h3 id="audit-and-compliance">Audit and Compliance</h3>
            <ul>
              <li>Comprehensive logging of all actions</li>
              <li>Non-repudiation of secret access</li>
              <li>Retention policies aligned with compliance requirements</li>
            </ul>

            <h2 id="technical-implementation-details">Technical Implementation Details</h2>

            <h3 id="secret-storage">Secret Storage</h3>
            <p>Secrets are stored using a layered approach:</p>
            <ol>
              <li>Secret value encrypted with a unique Data Encryption Key (DEK)</li>
              <li>DEK encrypted with a Key Encryption Key (KEK)</li>
              <li>Metadata stored separately from encrypted values</li>
              <li>Optional hardware security module (HSM) integration</li>
            </ol>

            <h3 id="client-server-communication">Client-Server Communication</h3>
            <p>All communication follows secure protocols:</p>
            <ol>
              <li>Mutual TLS authentication</li>
              <li>JWT-based authorization</li>
              <li>Rate limiting to prevent brute force attacks</li>
              <li>Encrypted payload even over TLS</li>
            </ol>

            <h3 id="high-availability">High Availability</h3>
            <p>For production deployments, Qalá supports:</p>
            <ul>
              <li>Multi-node clustering</li>
              <li>Database replication</li>
              <li>Geographical redundancy</li>
              <li>Automatic failover</li>
            </ul>

            <h2 id="next-steps">Next Steps</h2>
            <p>Now that you understand Qalá's core concepts, you can explore:</p>
            <ul>
              <li>
                <Link href="/docs/quick-start" className="text-primary hover:underline">
                  Quick Start Guide
                </Link>{" "}
                for practical implementation
              </li>
              <li>
                <Link href="/docs/best-practices" className="text-primary hover:underline">
                  Best Practices
                </Link>{" "}
                for security optimization
              </li>
              <li>
                <Link href="/docs/api-reference" className="text-primary hover:underline">
                  API Reference
                </Link>{" "}
                for integration details
              </li>
              <li>
                <Link href="/docs/guides" className="text-primary hover:underline">
                  Guides
                </Link>{" "}
                for sophisticated use cases
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
