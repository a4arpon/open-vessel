import type { Profile } from "@/@types/profile"
import { InputText } from "@/components/shared/Input"
import authService from "@/services/auth.service"
import { Button } from "@nextui-org/react"
import { createLazyFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"

const SetupProfile = () => {
  const { register, handleSubmit } = useForm<Profile>()
  const [profile, setProfile] = useState<Profile | null>(null)
  useEffect(() => {
    const getProfile = async () => {
      await authService
        .getProfile()
        .then((res) => res?.prefs)
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        .then((res: any) => res && setProfile(res))
    }
    getProfile()

    return () => {
      setProfile(null)
    }
  }, [])

  const setupProfile = async (data: Profile) => {
    authService
      .updateProfile({ ...profile, ...data })
      .then((res) => console.log(res))
  }
  console.log(profile)
  return (
    <>
      <Helmet>
        <title>Setup Profile | TheWayne's Vessel</title>
      </Helmet>
      <div>
        <form
          className="grid lg:grid-cols-2 gap-4"
          onSubmit={handleSubmit(setupProfile)}
        >
          <div className="flex flex-col gap-1">
            <label>Full Name</label>
            <InputText
              placeholder="Enter your full name."
              {...register("name")}
              defaultValue={profile?.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone</label>
            <InputText
              placeholder="Enter your phone."
              {...register("phone")}
              type="tel"
              defaultValue={profile?.phone}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Profession</label>
            <InputText
              placeholder="Enter your profession."
              {...register("profession")}
              defaultValue={profile?.profession}
            />
          </div>
          <div className="lg:col-span-2">
            <Button color="danger" type="submit">
              Update Profile
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export const Route = createLazyFileRoute("/profile/setup")({
  component: SetupProfile,
})
