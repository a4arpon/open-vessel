import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/profile")({
  component: () => (
    <>
      <p>Hello Router Page</p>
    </>
  ),
})
