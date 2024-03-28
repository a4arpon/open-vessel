import { UserContext } from "@/providers/UserContext"
import { createLazyFileRoute } from "@tanstack/react-router"
import { BriefcaseBusiness, Phone } from "lucide-react"
import { useContext } from "react"
import { Helmet } from "react-helmet-async"

const Component = () => {
  const { profile } = useContext(UserContext)
  return (
    <>
      <Helmet>
        <title>Profile | Wayne'sVessel</title>
      </Helmet>
      <div>
        <div className="border-b-2 pb-5 pt-3 lg:pb-10 lg:pt-5 border-primary">
          <h3 className="text-3xl lg:text-5xl font-bold text-primary">
            {profile?.name}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-3 mt-5">
          <div>
            <p className="flex items-center gap-2">
              <BriefcaseBusiness />
              {profile?.profession}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <Phone />
              {profile?.phone}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export const Route = createLazyFileRoute("/app/_layout/profile/")({
  component: Component,
})
