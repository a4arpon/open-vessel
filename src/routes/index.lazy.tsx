import type { BloodPost } from "@/@types/posts.type"
import PostCard from "@/components/others/homepage/PostCard"
import SearchBar from "@/components/others/homepage/SearchBar"
import bloodPostService from "@/services/blood-post.service"
import { createLazyFileRoute } from "@tanstack/react-router"
import { lazy, useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
const AddPost = lazy(() => import("@/components/others/homepage/AddPost"))

const Component = () => {
  const [posts, setPosts] = useState<BloodPost[] | null>(null)

  useEffect(() => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    bloodPostService.posts().then((res: any) => {
      if (res) {
        setPosts(res)
      }
    })
    return () => {
      setPosts(null)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Home Feed | TheWayne's Vessel</title>
      </Helmet>
      <section className="flex flex-col gap-5 items-center">
        <SearchBar />
        <div className="grid lg:grid-cols-2 gap-3 w-full">
          {posts?.map((item) => (
            <PostCard key={item?.$id} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export const Route = createLazyFileRoute("/")({
  component: Component,
})
