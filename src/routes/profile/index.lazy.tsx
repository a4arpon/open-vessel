import authService from "@/services/auth.service"
import { Button } from "@nextui-org/react"
import { Link, Outlet, createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/profile/")({
  component: () => (
    <>
      <Helmet>
        <title>Profile | TheWayne's Vessel</title>
      </Helmet>
      <p>Hello Router Page</p>
      <Button onClick={async () => console.log(await authService.getProfile())}>
        Get Profile
      </Button>
      <div className="px-5" />
      <br />
      <Link to="/auth">Login</Link>
      <Outlet />
    </>
  ),
})
