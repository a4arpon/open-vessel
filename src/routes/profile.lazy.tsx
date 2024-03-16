import authService from "@/services/auth.service"
import { Button } from "@nextui-org/react"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/profile")({
  component: () => (
    <>
      <p>Hello Router Page</p>
      <Button onClick={async () => await console.log(authService.getProfile())}>
        Get Profile
      </Button>
    </>
  ),
})
