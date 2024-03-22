import authService from "@/services/auth.service"
import { Button } from "@nextui-org/react"
import { createLazyFileRoute } from "@tanstack/react-router"

const Verify = () => {
  const { secret, userId } = Route.useSearch() as {
    secret: string
    userId: string
  }

  console.log(secret, userId)

  const verifyNow = async () => {
    await authService.updateVerification(userId, secret)
  }
  return (
    <div>
      <Button
        color="primary"
        className="font-semibold uppercase"
        onClick={() => verifyNow()}
      >
        Verify
      </Button>
    </div>
  )
}

export const Route = createLazyFileRoute("/verify")({
  component: Verify,
})
