import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/app/_layout/post")({
  component: () => (
    <>
      <Helmet>
        <title>Post | Wayne'sVessel</title>
      </Helmet>
      <p>Hello Router Page post</p>
    </>
  ),
})
