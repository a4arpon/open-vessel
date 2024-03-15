import { ConfigContext } from "@/providers/ConfigContext"
import { Link } from "@tanstack/react-router"
import {
  Bell,
  ChevronLeft,
  Compass,
  FileClock,
  Ship,
  ShoppingBag,
  UserRound,
} from "lucide-react"
import { useContext } from "react"

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(ConfigContext)
  return (
    <aside
      className={`lg:col-span-2 bg-[#000]/20 backdrop-blur lg:bg-transparent lg:border-r border-foreground-300 ${
        !isSidebarOpen && "hidden"
      }  ${isSidebarOpen && "fixed lg:static w-full z-50 lg:z-0"} lg:block`}
    >
      <div className="h-full min-h-screen bg-danger lg:bg-background backdrop-blur text-background w-[90%] lg:w-full lg:backdrop-blur-none">
        <div className="relative lg:hidden lg:static">
          <button
            onClick={() => toggleSidebar()}
            type="button"
            className="absolute -right-3 bg-background rounded-medium top-5 text-foreground p-[2px]"
          >
            <ChevronLeft size={34} />
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2 pt-20 lg:text-foreground">
          {sidebarItems?.map((item, index) => (
            <Link
              to={item?.to}
              className="font-semibold uppercase justify-start rounded flex items-center py-3 px-4 gap-3 duration-300 ease-in-out transition-all"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              activeProps={{
                className: "rounded-2xl bg-background text-foreground lg:bg-danger lg:text-background",
              }}
            >
              {item?.icon}
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

const sidebarItems = [
  {
    name: "Feed",
    to: "/",
    icon: <Compass size={28} />,
  },
  {
    name: "Notifications",
    to: "/notifications",
    icon: <Bell size={28} />,
  },
  {
    name: "History",
    to: "/history",
    icon: <FileClock size={28} />,
  },
  {
    name: "Profile",
    to: "/profile",
    icon: <UserRound size={28} />,
  },
  {
    name: "Vessel",
    to: "/vessel",
    icon: <Ship size={28} />,
  },
  {
    name: "Mart",
    to: "/mart",
    icon: <ShoppingBag size={28} />,
  },
]
