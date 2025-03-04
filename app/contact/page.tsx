import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-6 lg:py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Contact Us</h1>
          <p className="mb-8">
            We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

