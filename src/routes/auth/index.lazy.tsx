import authService from "@/services/auth.service"
import { Button, Card, CardBody, Input } from "@nextui-org/react"
import { createLazyFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"

const Auth = () => {
  const { register, handleSubmit } = useForm<{
    email: string
    password: string
    name: string
  }>()
  const [isLogin, setIsLogin] = useState<
    "register" | "login" | "verify" | "reset"
  >("login")

  const handleAuthForm = async (data: {
    email: string
    password: string
    name: string
  }) => {
    isLogin === "login"
      ? await authService.login(data?.email, data?.password).then((res) => {
          if (res?.login === true) {
            return window.location.assign(
              `${import.meta.env.VITE_APP_URL}/app/`
            )
          }
        })
      : isLogin === "register"
        ? await authService.register(data?.email, data?.password, data?.name)
        : await authService.createVerification()
  }

  return (
    <>
      <Helmet>
        <title>Authentication | Wayne'sVessel</title>
      </Helmet>

      <div className="w-full min-h-screen flex items-center justify-center">
        <Card className="xl:w-[35%] lg:w-2/5">
          <CardBody>
            <h3 className="uppercase font-semibold text-xl mb-3">
              Lorem ipsum dolor sit.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              eligendi molestias nisi ab consectetur? Nihil.
            </p>
            {isLogin === "login" ? (
              <form
                onSubmit={handleSubmit(handleAuthForm)}
                className="mt-5 flex flex-col gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email")}
                  variant="underlined"
                  color="primary"
                />
                <Input
                  type="text"
                  placeholder="Enter Your Password"
                  {...register("password")}
                  variant="underlined"
                  color="primary"
                />
                <div>
                  <p className="text-sm">
                    Don't have any account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin("register")}
                      className="underline"
                    >
                      Register Now
                    </button>
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button
                    color="primary"
                    type="submit"
                    className="font-semibold uppercase"
                  >
                    Login
                  </Button>
                </div>
              </form>
            ) : (
              isLogin === "register" && (
                <form
                  onSubmit={handleSubmit(handleAuthForm)}
                  className="mt-5 flex flex-col gap-3"
                >
                  <Input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name")}
                    variant="underlined"
                    color="primary"
                  />
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    {...register("email")}
                    variant="underlined"
                    color="primary"
                  />
                  <Input
                    type="text"
                    placeholder="Set Your Password"
                    {...register("password")}
                    variant="underlined"
                    color="primary"
                  />
                  <div>
                    <p className="text-sm">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsLogin("login")}
                        className="underline"
                      >
                        Login Now
                      </button>
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      color="primary"
                      type="submit"
                      className="font-semibold uppercase"
                    >
                      Register
                    </Button>
                  </div>
                </form>
              )
            )}
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export const Route = createLazyFileRoute("/auth/")({
  component: Auth,
})
