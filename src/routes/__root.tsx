import Footer from "@/components/shared/Footer"
import Sidebar from "@/components/shared/Sidebar"
import ConfigContextProvider from "@/providers/ConfigContext"
import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: () => (
    <ConfigContextProvider>
      <Sidebar />
      <div className="lg:col-span-8">
        <Footer />
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </ConfigContextProvider>
  ),
})
