import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ClickableCardProps {
  href: string
  title: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function ClickableCard({ href, title, description, icon, children }: ClickableCardProps) {
  return (
    <Link href={href} className="block h-full transition-colors hover:bg-muted/50">
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-grow">
          {icon && <div className="h-10 w-10 mb-4 text-primary">{icon}</div>}
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </Link>
  )
}

