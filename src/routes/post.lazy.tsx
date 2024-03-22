import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/post")({
  component: () => (
    <>
      <Helmet>
        <title>Post | TheWayne's Vessel</title>
      </Helmet>
      <p>Hello Router Page post</p>
    </>
  ),
})
