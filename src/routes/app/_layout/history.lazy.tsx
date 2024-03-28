import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/app/_layout/history")({
  component: () => (
    <>
      <Helmet>
        <title>History | Wayne'sVessel</title>
      </Helmet>
      <h3>Hello History Page</h3>
    </>
  ),
})
