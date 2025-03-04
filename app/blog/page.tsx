"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays, ChevronRight } from "lucide-react"
import Header from "@/components/Header"

const blogPosts = [
  {
    id: 1,
    title: "Introducing Qalá v0.9.5",
    date: "March 15, 2023",
    excerpt: "We're excited to announce the release of Qalá v0.9.5, a significant step towards our 1.0 release.",
    content: `...`,
  },
  {
    id: 2,
    title: "Introducing Qalá v0.9.0",
    date: "March 5, 2023",
    excerpt:
      "We're thrilled to announce the release of Qalá v0.9.0, a significant milestone on our journey toward the upcoming 1.0 release.",
    content: `...`,
  },
  {
    id: 3,
    title: "Best Practices for Secret Rotation",
    date: "February 25, 2023",
    excerpt:
      "Secret rotation is a crucial aspect of maintaining a secure environment. In this post, we dive into effective strategies for implementing secret rotation.",
    content: `...`,
  },
  {
    id: 4,
    title: "Qalá's Commitment to Open Source",
    date: "February 20, 2023",
    excerpt: "At Qalá, we believe in the power of open source. This post outlines our journey and future plans.",
    content: `...`,
  },
  {
    id: 5,
    title: "Introducing Qalá v0.8.4 - Our First Public Release",
    date: "February 15, 2023",
    excerpt:
      "We're excited to announce the first public release of Qalá, version 0.8.4. This marks a significant milestone in our journey to revolutionize secrets management.",
    content: `...`,
  },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
              Qalá Blog
            </h1>
            <div className="max-w-3xl mx-auto">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="mb-8 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary"></div>
                  <div
                    className={`pl-8 relative cursor-pointer transition-colors hover:bg-muted/50 p-4 rounded-lg ${
                      selectedPost === post.id ? "bg-muted/50" : ""
                    }`}
                    onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      <CalendarDays className="inline-block mr-2 h-4 w-4" />
                      {post.date}
                    </p>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                    <span className="text-primary inline-flex items-center">
                      {selectedPost === post.id ? "Read less" : "Read more"} <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                  <AnimatePresence>
                    {selectedPost === post.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-8 mt-4"
                      >
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

