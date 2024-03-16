import authService from "@/services/auth.service"
import { Button, Card, CardBody } from "@nextui-org/react"
import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/auth")({
  component: () => (
    <>
      <Helmet>
        <title>Authentication | Open Vessel</title>
      </Helmet>
      <div className="w-full flex items-center justify-end">
        <Card className="w-1/2">
          <CardBody>
            <h3 className="uppercase font-semibold text-xl mb-3">
              Lorem ipsum dolor sit.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              eligendi molestias nisi ab consectetur? Nihil.
            </p>
            <div className="mt-3">
              <Button
                color="primary"
                className="font-semibold uppercase"
                onClick={() => {
                  authService.createSessionWithGoogle()
                }}
              >
                Authenticate With Google
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  ),
})
