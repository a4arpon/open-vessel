import { ConfigContext } from "@/providers/ConfigContext"
import { Link } from "@tanstack/react-router"
import { AlignJustify, Bell, Compass, UserRound } from "lucide-react"
import { useContext } from "react"

const Navigator = () => {
  const { toggleSidebar } = useContext(ConfigContext)
  return (
    <footer className="bg-primary fixed lg:static bottom-0 w-full text-background flex justify-around items-center p-3 lg:col-span-8 h-fit lg:hidden z-10">
      <Link to="/">
        <Compass size={28} />
      </Link>
      <Link to="/notifications">
        <Bell size={28} />
      </Link>
      <Link to="/profile">
        <UserRound size={28} />
      </Link>
      <div className="lg:hidden">
        <button type="button" onClick={() => toggleSidebar()}>
          <AlignJustify size={28} />
        </button>
      </div>
    </footer>
  )
}

export default Navigator


