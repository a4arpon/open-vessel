import Footer from "@/components/shared/Footer"
import Sidebar from "@/components/shared/Sidebar"
import ConfigContextProvider from "@/providers/ConfigContext"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { HelmetProvider } from "react-helmet-async"

export const Route = createRootRoute({
  component: () => (
    <HelmetProvider>
      <ConfigContextProvider>
        <div className="grid lg:grid-cols-10 lg:container">
          <Sidebar />
          <div className="lg:col-span-8">
            <Footer />
            <main className="p-2 lg:p-3 lg:col-span-8">
              <Outlet />
            </main>
          </div>
        </div>
      </ConfigContextProvider>
    </HelmetProvider>
  ),
})
