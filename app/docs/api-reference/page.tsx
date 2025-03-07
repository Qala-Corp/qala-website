import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function APIReferencePage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">API Reference</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This document provides a comprehensive reference for the Qalá API, detailing the available endpoints and
              functionality for secure secret management.
            </p>

            <h2 id="base-url">Base URL</h2>
            <p>
              All API requests should be made to: <code>https://api.qala-security.com</code>
            </p>

            <h2 id="authentication">Authentication</h2>
            <p>Qalá API uses JWT token-based authentication. You can authenticate using either:</p>

            <h3 id="login-with-email-and-password">Login with Email and Password</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">POST /auth/login</code>
            </pre>

            <p>
              <strong>Request Body:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "email": "user@example.com",
  "password": "your-password"
}`}
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "token": "your-jwt-token"
}`}
              </code>
            </pre>

            <h3 id="login-with-api-key">Login with API Key</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">POST /auth/token</code>
            </pre>

            <p>
              <strong>Request Body:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "apiKey": "your-api-key"
}`}
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "token": "your-jwt-token"
}`}
              </code>
            </pre>

            <p>Once authenticated, include the JWT token in the Authorization header for all subsequent requests:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">Authorization: Bearer your-jwt-token</code>
            </pre>

            <h2 id="user-endpoints">User Endpoints</h2>

            <h3 id="get-user-profile">Get User Profile</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">GET /user/profile</code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "id": "user-id",
  "email": "user-email",
  "name": "user-name",
  "projects": [
    {
      "id": "project-id",
      "name": "project-name"
    }
  ]
}`}
              </code>
            </pre>

            <h2 id="project-endpoints">Project Endpoints</h2>

            <h3 id="list-projects">List Projects</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">GET /projects</code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`[
  {
    "id": "project-id",
    "name": "project-name",
    "description": "project-description"
  }
]`}
              </code>
            </pre>

            <h3 id="create-project">Create Project</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">POST /projects</code>
            </pre>

            <p>
              <strong>Request Body:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "name": "project-name",
  "description": "project-description"
}`}
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "id": "project-id",
  "name": "project-name",
  "description": "project-description"
}`}
              </code>
            </pre>

            <h3 id="get-project-details">Get Project Details</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">GET /projects/:projectId</code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "id": "project-id",
  "name": "project-name",
  "description": "project-description",
  "createdAt": "timestamp"
}`}
              </code>
            </pre>

            <h2 id="environment-endpoints">Environment Endpoints</h2>

            <h3 id="list-environments">List Environments</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">GET /projects/:projectId/environments</code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`[
  {
    "name": "environment-name"
  }
]`}
              </code>
            </pre>

            <h3 id="create-environment">Create Environment</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">POST /projects/:projectId/environments</code>
            </pre>

            <p>
              <strong>Request Body:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "name": "environment-name"
}`}
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "name": "environment-name"
}`}
              </code>
            </pre>

            <h2 id="secret-management-endpoints">Secret Management Endpoints</h2>

            <h3 id="list-secrets">List Secrets</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                GET /projects/:projectId/environments/:environment/secrets
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`[
  {
    "name": "secret-name",
    "description": "secret-description",
    "updatedAt": "timestamp"
  }
]`}
              </code>
            </pre>

            <h3 id="get-secret">Get Secret</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                GET /projects/:projectId/environments/:environment/secrets/:secretName
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "name": "secret-name",
  "value": "secret-value",
  "description": "secret-description",
  "updatedAt": "timestamp"
}`}
              </code>
            </pre>

            <h3 id="create-or-update-secret">Create or Update Secret</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                PUT /projects/:projectId/environments/:environment/secrets/:secretName
              </code>
            </pre>

            <p>
              <strong>Request Body:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "value": "secret-value",
  "description": "secret-description"
}`}
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "name": "secret-name",
  "description": "secret-description",
  "updatedAt": "timestamp"
}`}
              </code>
            </pre>

            <h3 id="delete-secret">Delete Secret</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                DELETE /projects/:projectId/environments/:environment/secrets/:secretName
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">204 No Content</code>
            </pre>

            <h3 id="rotate-secret">Rotate Secret</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                POST /projects/:projectId/environments/:environment/secrets/:secretName/rotate
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "name": "secret-name",
  "description": "secret-description",
  "updatedAt": "timestamp"
}`}
              </code>
            </pre>

            <h2 id="logging">Logging</h2>

            <h3 id="log-secret-access">Log Secret Access</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">POST /projects/:projectId/logs</code>
            </pre>

            <p>
              <strong>Request Body:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "environment": "environment-name",
  "secretName": "secret-name",
  "action": "read", // or "write", "delete", etc.
  "timestamp": "ISO-timestamp"
}`}
              </code>
            </pre>

            <p>
              <strong>Response:</strong>
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">200 OK</code>
            </pre>

            <h2 id="error-handling">Error Handling</h2>
            <p>The API returns standard HTTP status codes to indicate success or failure:</p>
            <ul>
              <li>
                <code>200 OK</code>: Request was successful
              </li>
              <li>
                <code>201 Created</code>: Resource was successfully created
              </li>
              <li>
                <code>204 No Content</code>: Request succeeded with no response body
              </li>
              <li>
                <code>400 Bad Request</code>: Request was malformed or invalid
              </li>
              <li>
                <code>401 Unauthorized</code>: Authentication failed
              </li>
              <li>
                <code>403 Forbidden</code>: Authenticated user doesn't have permission
              </li>
              <li>
                <code>404 Not Found</code>: Requested resource not found
              </li>
              <li>
                <code>500 Internal Server Error</code>: Server encountered an error
              </li>
            </ul>

            <p>Error responses include a message field:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm text-foreground">
                {`{
  "message": "Error description"
}`}
              </code>
            </pre>

            <h2 id="rate-limits">Rate Limits</h2>
            <p>API requests are subject to rate limiting to ensure service stability. The current limits are:</p>
            <ul>
              <li>100 requests per minute per IP address</li>
              <li>1000 requests per hour per authenticated user</li>
            </ul>
            <p>
              When a rate limit is exceeded, the API returns a <code>429 Too Many Requests</code> status code.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
