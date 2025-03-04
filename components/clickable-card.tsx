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
    <Link href={href} className="block transition-colors hover:bg-muted/50">
      <Card>
        <CardHeader>
          {icon && <div className="h-8 w-8 mb-4 text-primary">{icon}</div>}
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </Link>
  )
}

