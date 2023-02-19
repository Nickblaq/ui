"use client"

import { Button, useToast } from "@shadcn/ui"

export function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
