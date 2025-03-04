import { Header } from "@/components/header"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Terms of Service</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>Last updated: March 1, 2025</p>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Qalá website
              and service operated by Qalá Security, Inc.
            </p>
            <h2>1. Terms</h2>
            <p>
              By accessing the website at https://qala-security.com, you are agreeing to be bound by these Terms of
              Service, all applicable laws and regulations, and agree that you are responsible for compliance with any
              applicable local laws.
            </p>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on
              Qalá's website for personal, non-commercial transitory viewing only.
            </p>
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Qalá's website are provided on an 'as is' basis. Qalá makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
            <h2>4. Limitations</h2>
            <p>
              In no event shall Qalá or its suppliers be liable for any damages (including, without limitation, damages
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use
              the materials on Qalá's website, even if Qalá or a Qalá authorized representative has been notified orally
              or in writing of the possibility of such damage.
            </p>
            <h2>5. Revisions and Errata</h2>
            <p>
              The materials appearing on Qalá's website could include technical, typographical, or photographic errors.
              Qalá does not warrant that any of the materials on its website are accurate, complete or current. Qalá may
              make changes to the materials contained on its website at any time without notice.
            </p>
            <h2>6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the State of
              California and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

