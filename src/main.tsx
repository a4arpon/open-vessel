import { RouterProvider, createRouter } from "@tanstack/react-router"
import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"
import ConfigContextProvider from "./providers/ConfigContext"
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
        <RouterProvider router={router} />
      </ConfigContextProvider>
    </HelmetProvider>
  </React.StrictMode>
)
