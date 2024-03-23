import { RouterProvider, createRouter } from "@tanstack/react-router"
import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"
import "./index.css"
import ConfigContextProvider from "./providers/ConfigContext"
import UserContextProvider from "./providers/UserContext"
import { routeTree } from "./routeTree.gen"

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ConfigContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ConfigContextProvider>
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>
)
