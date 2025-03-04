import { Check, Minus } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ComparisonTable() {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Feature</TableHead>
          <TableHead className="text-center bg-primary/5">Qalá</TableHead>
          <TableHead className="text-center">AWS Secrets Manager</TableHead>
          <TableHead className="text-center">HashiCorp Vault</TableHead>
          <TableHead className="text-center">Doppler</TableHead>
          <TableHead className="text-center">.env files</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Pricing</TableCell>
          <TableCell className="text-center bg-primary/5">From $0</TableCell>
          <TableCell className="text-center">$0.40/secret/month</TableCell>
          <TableCell className="text-center">From $0</TableCell>
          <TableCell className="text-center">From $5/user</TableCell>
          <TableCell className="text-center">Free</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Self-hosted option</TableCell>
          <TableCell className="text-center bg-primary/5">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Setup complexity</TableCell>
          <TableCell className="text-center bg-primary/5">Low</TableCell>
          <TableCell className="text-center">High</TableCell>
          <TableCell className="text-center">Very High</TableCell>
          <TableCell className="text-center">Low</TableCell>
          <TableCell className="text-center">Very Low</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">End-to-end encryption</TableCell>
          <TableCell className="text-center bg-primary/5">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
          </TableCell>
          <TableCell className="text-center">
            <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Local development</TableCell>
          <TableCell className="text-center bg-primary/5">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">Limited</TableCell>
          <TableCell className="text-center">Limited</TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">CI/CD integration</TableCell>
          <TableCell className="text-center bg-primary/5">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">Limited</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Secret rotation</TableCell>
          <TableCell className="text-center bg-primary/5">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Check className="mx-auto h-4 w-4" />
          </TableCell>
          <TableCell className="text-center">
            <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Vercel integration</TableCell>
          <TableCell className="text-center bg-primary/5">Native</TableCell>
          <TableCell className="text-center">Custom</TableCell>
          <TableCell className="text-center">Custom</TableCell>
          <TableCell className="text-center">Native</TableCell>
          <TableCell className="text-center">Limited</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Docker integration</TableCell>
          <TableCell className="text-center bg-primary/5">Native</TableCell>
          <TableCell className="text-center">SDK</TableCell>
          <TableCell className="text-center">SDK</TableCell>
          <TableCell className="text-center">CLI</TableCell>
          <TableCell className="text-center">Volume mount</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

