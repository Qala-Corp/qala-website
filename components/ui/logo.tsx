import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Qala%CC%80-big-logo-9wzfPMN7B5E7CVlBCnBDJ55Y6kiW78.png"
      alt="Qalá Logo"
      width={32}
      height={32}
      className={className}
    />
  )
}

