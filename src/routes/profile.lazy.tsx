import authService from "@/services/auth.service"
import { Button } from "@nextui-org/react"
import { Link, createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/profile")({
  component: () => (
    <>
      <p>Hello Router Page</p>
      <Button onClick={async () => console.log(await authService.getProfile())}>
        Get Profile
      </Button>
      <div className="px-5" />
      <br />
      <Link to="/auth">Login</Link>
    </>
  ),
})
