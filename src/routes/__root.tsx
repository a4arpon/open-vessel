import Navigator from "@/components/shared/Navigtator"
import Sidebar from "@/components/shared/Sidebar"
import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: () => (
    <div className="grid lg:grid-cols-10 lg:container">
      <Sidebar />
      <div className="lg:col-span-8">
        <Navigator />
        <main className="p-2 lg:p-3 lg:col-span-8">
          <Outlet />
        </main>
      </div>
    </div>
  ),
})
