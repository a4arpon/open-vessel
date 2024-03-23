import type { Profile } from "@/@types/profile"
import authService from "@/services/auth.service"
import { createContext, useEffect, useState } from "react"

type UserContextType = {
  profile: Profile | null
}

export const UserContext = createContext<UserContextType>({
  profile: null,
})

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const _profile: any = await authService.getProfile()
      if (_profile) {
        setProfile(_profile)
      }
      console.log("Render on user context provider for profile", new Date())
    }

    fetchProfile()
    return () => {
      setProfile(null)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        profile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
