import ConfigContextProvider from "@/providers/ConfigContext"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"

export const Route = createRootRoute({
  component: () => (
    <HelmetProvider>
      <ConfigContextProvider>
        <Outlet />
      </ConfigContextProvider>
      <Toaster />
    </HelmetProvider>
  ),
})
