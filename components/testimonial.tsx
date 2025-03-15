import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export function Testimonial() {
  return (
    <Card className="overflow-hidden w-[800px] border-none bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 p-6 md:p-8 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden">
              <Image
                src="/javid-fataliyev.png"
                alt="Customer"
                width={512}
                height={512}
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6 md:p-8">
            <blockquote className="text-lg md:text-xl italic mb-4">
              "Pinch of common sense in secrets management."
            </blockquote>
            <div className="font-semibold">Tech, Javid Fataliyev</div>
            <div className="text-sm text-muted-foreground">Qala Corp.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
