import type { Profile } from "@/@types/profile"
import authService from "@/services/auth.service"
import { createContext, useEffect, useState } from "react"

type UserContextType = {
  profile: Profile | null
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  user: any
  isLoadingProfile: boolean
}

export const UserContext = createContext<UserContextType>({
  profile: null,
  user: null,
  isLoadingProfile: true,
})

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [isLoadingProfile, setIsLoadingProfile] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const _profile: any = await authService.getProfile()
        if (_profile) {
          setUser(_profile)
          setProfile(_profile.prefs)
        }
      } catch (error) {
        console.log("User Context Error ", error)
      }
    }

    fetchProfile().finally(() => setIsLoadingProfile(false))

    return () => {
      setProfile(null)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        profile,
        isLoadingProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
