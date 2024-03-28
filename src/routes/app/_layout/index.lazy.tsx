import type { BloodPost } from "@/@types/posts.type"
import PostCard from "@/components/others/homepage/PostCard"
import SearchBar from "@/components/others/homepage/SearchBar"
import bloodPostService from "@/services/blood-post.service"
import { createLazyFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

const Component = () => {
  const [posts, setPosts] = useState<BloodPost[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      console.log("Render")
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      await bloodPostService.posts().then((res: any) => {
        if (res) {
          setPosts(res)
        }
      })
    }
    fetchData()
    return () => {
      setPosts(null)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Home Feed | Wayne'sVessel</title>
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

export const Route = createLazyFileRoute("/app/_layout/")({
  component: Component,
})
