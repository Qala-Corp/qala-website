import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider"
import BackgroundAnimation from '@/components/BackgroundAnimation';



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Qalá - Secrets Management That Finally Makes Sense",
  description: "The fastest, most secure way to manage environment variables and sensitive data across your entire development lifecycle.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <BackgroundAnimation />
        <Header />
        <div className="block relative h-[calc(100%-65px)] w-full mt-[65px]">
          {children}
        </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
