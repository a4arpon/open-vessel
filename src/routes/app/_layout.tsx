import Navigator from "@/components/shared/Navigtator"
import Sidebar from "@/components/shared/Sidebar"
import UserContextProvider, { UserContext } from "@/providers/UserContext"
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router"
import { useContext, useLayoutEffect } from "react"

const Layout = () => {
  const { user, isLoadingProfile } = useContext(UserContext)
  const navigator = useNavigate()

  useLayoutEffect(() => {
    if (!user && !isLoadingProfile) {
      navigator({ replace: true, to: "/auth" })
    }
    return () => {}
  }, [navigator, user, isLoadingProfile])

  return (
    <UserContextProvider>
      <div className="grid lg:grid-cols-10 lg:container">
        <Sidebar />
        <div className="lg:col-span-8">
          <Navigator />
          <main className="p-2 lg:p-3 lg:col-span-8">
            <Outlet />
          </main>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default Layout

export const Route = createFileRoute("/app/_layout")({
  component: Layout,
})
