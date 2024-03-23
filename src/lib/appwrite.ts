import { Client, Databases } from "appwrite"

/*--------------------------------------
          AppWrite Config
---------------------------------------*/
export const appWriteConf = {
  url: import.meta.env.VITE_APPWRITE_URL,
  project: import.meta.env.VITE_APPWRITE_PID,
  database: import.meta.env.VITE_APPWRITE_DBID,
  bloodPostCollections: "65ff1707659d8940c511",
}

class AppWriteService {
  client = new Client()
  databases

  constructor() {
    this.client
      .setEndpoint(appWriteConf.url)
      .setProject(appWriteConf.project)
    this.databases = new Databases(this.client)
  }
}

const appWrite = new AppWriteService()

export default appWrite
