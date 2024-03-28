import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <p>Hello Router Page</p>
    </>
  ),
})
