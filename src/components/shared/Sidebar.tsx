import { ConfigContext } from "@/providers/ConfigContext"
import { Button } from "@nextui-org/react"
import { useNavigate } from "@tanstack/react-router"
import { ChevronLeft } from "lucide-react"
import { useContext } from "react"

const Sidebar = () => {
  const navigator = useNavigate()
  const { isSidebarOpen, toggleSidebar } = useContext(ConfigContext)
  return (
    <aside
      className={`lg:col-span-2 bg-[#000]/20 backdrop-blur lg:bg-transparent ${
        !isSidebarOpen && "hidden"
      }  ${isSidebarOpen && "fixed lg:static w-full z-50 lg:z-0"} lg:block`}
    >
      <div className="h-full min-h-screen bg-danger/80 lg:bg-danger backdrop-blur text-background w-[90%] lg:w-full lg:backdrop-blur-none">
        <div className="relative lg:hidden lg:static">
          <button
            onClick={() => toggleSidebar()}
            type="button"
            className="absolute -right-3 bg-background rounded-medium top-5 text-foreground p-[2px]"
          >
            <ChevronLeft size={34} />
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2 pt-20">
          <Button
            fullWidth={true}
            onClick={() =>
              navigator({
                to: "/",
              })
            }
            className="bg-background font-semibold uppercase justify-start"
          >
            Home
          </Button>
          <Button
            fullWidth={true}
            onClick={() =>
              navigator({
                to: "/profile",
              })
            }
            variant="flat"
            className="font-semibold text-background uppercase justify-start"
          >
            Profile
          </Button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
