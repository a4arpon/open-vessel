import AddPost from "@/components/others/homepage/AddPost"
import PostCard from "@/components/others/homepage/PostCard"
import SearchBar from "@/components/others/homepage/SearchBar"
import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <Helmet>
        <title>Home Feed | TheWayne's Vessel</title>
      </Helmet>
      <section className="flex flex-col gap-5 items-center">
        <SearchBar />
        <AddPost />
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
