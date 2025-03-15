import Image from "next/image"
import qala from "@/public/qala-logo-128.png"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={qala}
      alt="Qalá Logo"
      width={32}
      height={42}
      className={className}
    />
  )
}
