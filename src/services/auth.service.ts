import appWrite from "@/lib/appwrite"
import { Account, OAuthProvider } from "appwrite"

export class AuthService {
  private account

  constructor() {
    this.account = new Account(appWrite.client)
  }

  async createSessionWithGoogle() {
    try {
      const userAccount = await this.account.createOAuth2Session(
        OAuthProvider.Google,
        `${import.meta.env.VITE_APP_URL}/profile`,
        `${import.meta.env.VITE_APP_URL}/failure-profile`
      )
      return userAccount
    } catch (error) {
      console.error("Register Error", error)
    }
  }

  async getProfile() {
    try {
      return await this.account.get()
    } catch (error) {
      console.error("Get Profile Error", error)
    }

    return null
  }
}

const authService = new AuthService()

export default authService
