import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/notifications")({
  component: () => (
    <>
      <Helmet>
        <title>Notifications | Wayne'sVessel</title>
      </Helmet>
      <p>Hello Router Notification Router Page</p>
    </>
  ),
})
