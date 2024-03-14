import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/auth")({
  component: () => (
    <>
      <p>Hello Router Page auth</p>
    </>
  ),
})
