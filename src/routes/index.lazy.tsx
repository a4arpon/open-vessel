import PostCard from "@/components/others/homepage/PostCard"
import SearchBar from "@/components/others/homepage/SearchBar"
import Loading from "@/components/shared/Loading"
import { createLazyFileRoute } from "@tanstack/react-router"
import { Suspense, lazy } from "react"
import { Helmet } from "react-helmet-async"
const AddPost = lazy(() => import("@/components/others/homepage/AddPost"))

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <Helmet>
        <title>Home Feed | TheWayne's Vessel</title>
      </Helmet>
      <section className="flex flex-col gap-5 items-center">
        <SearchBar />
        <Suspense fallback={<Loading />}>
          <AddPost />
        </Suspense>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </>
  ),
})
