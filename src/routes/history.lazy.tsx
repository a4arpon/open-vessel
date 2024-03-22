import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/history")({
  component: () => (
    <>
      <Helmet>
        <title>History | TheWayne's Vessel</title>
      </Helmet>
      <h3>Hello</h3>
    </>
  ),
})
