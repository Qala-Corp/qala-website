import { Header } from "@/components/header"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Privacy Policy</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>Last updated: March 1, 2025</p>
            <p>
              At Qalá, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website and services.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, use our
              services, or contact us for support.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and
              to protect Qalá and our users.
            </p>
            <h2>Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information when you
              enter, submit, or access your personal information.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@qala-security.com.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

