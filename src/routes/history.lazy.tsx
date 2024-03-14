import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/history")({
  component: () => (
    <>
      <p>Hello Router History Page</p>
    </>
  ),
})
