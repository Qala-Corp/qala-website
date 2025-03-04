import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function BlogPostModal({ post, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
          <DialogDescription>{post.date}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

