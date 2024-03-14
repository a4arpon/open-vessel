import { createContext, useState } from "react"

type ConfigCtxType = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const ConfigContext = createContext<ConfigCtxType>({
  isSidebarOpen: false,
  toggleSidebar() {},
})

const ConfigContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const config = {
    isSidebarOpen,
    toggleSidebar,
  }
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  )
}

export default ConfigContextProvider
