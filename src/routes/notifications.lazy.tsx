import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/notifications")({
  component: () => (
    <>
      <p>Hello Router Notification Router Page</p>
    </>
  ),
})
