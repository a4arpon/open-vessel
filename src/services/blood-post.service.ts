import appWrite, { appWriteConf } from "@/lib/appwrite"
import { ID } from "appwrite"

export class BloodPostService {
  async createPost(packet: object) {
    try {
      await appWrite.databases.createDocument(
        appWriteConf.database,
        appWriteConf.bloodPostCollections,
        ID.unique(),
        { ...packet }
      )
    } catch (error) {
      console.log("Post Error", error)
    }
  }

  async posts() {
    try {
      const list = await appWrite.databases.listDocuments(
        appWriteConf.database,
        appWriteConf.bloodPostCollections
      )
      return list?.documents || []
    } catch (error) {
      console.log("Post Error List", error)
    }
  }
}

const bloodPostService = new BloodPostService()

export default bloodPostService
