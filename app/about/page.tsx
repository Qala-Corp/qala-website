import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">About Qalá</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Qalá is a cutting-edge secrets management platform designed to help developers and organizations securely
              manage sensitive information across their entire development lifecycle.
            </p>
            <p>
              Founded in 2024, our mission is to make robust security practices accessible to development teams of all
              sizes. We believe that proper secrets management should be easy, efficient, and integrated seamlessly into
              modern workflows.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Security First:</strong> We never compromise on security standards.
              </li>
              <li>
                <strong>Developer Experience:</strong> We build tools that developers love to use.
              </li>
              <li>
                <strong>Transparency:</strong> We believe in the power of open source and community-driven development.
              </li>
              <li>
                <strong>Continuous Innovation:</strong> We're always pushing the boundaries of what's possible in
                secrets management.
              </li>
            </ul>
            <p>Join us in our mission to create a more secure digital world, one secret at a time.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

