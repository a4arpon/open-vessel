import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/post")({
  component: () => (
    <>
      <p>Hello Router Page post</p>
    </>
  ),
})
