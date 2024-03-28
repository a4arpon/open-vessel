import appWrite from "@/lib/appwrite"
import { Account, ID } from "appwrite"
import toast from "react-hot-toast"

export class AuthService {
  private account

  constructor() {
    this.account = new Account(appWrite.client)
  }

  async register(email: string, password: string, name: string) {
    try {
      await this.account.create(ID.unique(), email, password, name)
    } catch (error) {
      console.error(error)
    }
  }

  async login(email: string, password: string) {
    try {
      await this.account.createEmailPasswordSession(email, password)

      const profile = await this.getProfile()

      if (!profile?.emailVerification) {
        toast.error("Email not verified yet. Verify first.")
        this.createVerification()
      }

      return { login: true }
    } catch (error) {
      console.error("Login Error", error)
    }
  }

  async createVerification() {
    try {
      await this.account.createVerification(
        `${import.meta.env.VITE_APP_URL}/verify`
      )
    } catch (error) {
      console.log("Verify Error", error)
      toast.error("Verification error occurred.")
    }
  }

  async updateVerification(userId: string, secret: string) {
    try {
      await this.account
        .updateVerification(userId, secret)
        .then((_res) => toast.success("Your account has been verified."))
    } catch (error) {
      console.log("Verify Update Error", error)
      toast.error("Verification error occurred.")
    }
  }

  async getProfile() {
    try {
      const profile = await this.account.get()
      return profile
    } catch (error) {
      console.error("Get Profile Error ", error)
    }
  }

  async updateProfile(data: object) {
    try {
      return await this.account.updatePrefs(data)
    } catch (error) {
      console.log("Profile Update Error ", error)
    }
  }
}

const authService = new AuthService()

export default authService
