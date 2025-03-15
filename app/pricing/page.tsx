import { Header } from "@/components/header"
import { PricingCards } from "@/components/pricing-cards"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simple, Transparent&nbsp;&nbsp;Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for you. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <PricingCards />
          </div>
        </section>
      </main>
    </div>
  )
}
