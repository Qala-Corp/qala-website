import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export function Testimonial() {
  return (
    <Card className="overflow-hidden border-none bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 p-6 md:p-8 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-background">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Customer"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6 md:p-8">
            <blockquote className="text-lg md:text-xl italic mb-4">
              "Qala transformed how we handle sensitive data. What used to take days now takes minutes, with better
              security than we ever had before."
            </blockquote>
            <div className="font-semibold">CTO, [Future Customer]</div>
            <div className="text-sm text-muted-foreground">Leading Technology Company</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

