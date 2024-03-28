import authService from "@/services/auth.service"
import { Button } from "@nextui-org/react"
import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

const Verify = () => {
  const { secret, userId } = Route.useSearch() as {
    secret: string
    userId: string
  }

  const verifyNow = async () => {
    await authService.updateVerification(userId, secret)
  }
  return (
    <>
      <Helmet>
        <title>Verify Account | Wayne'sVessel</title>
      </Helmet>
      <div>
        <Button
          color="primary"
          className="font-semibold uppercase"
          onClick={() => verifyNow()}
        >
          Verify
        </Button>
      </div>
    </>
  )
}

export const Route = createLazyFileRoute("/auth/verify")({
  component: Verify,
})
