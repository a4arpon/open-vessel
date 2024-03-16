import { Client, Databases } from "appwrite"

/*--------------------------------------
          AppWrite Config
---------------------------------------*/
const config = {
  url: import.meta.env.VITE_APPWRITE_URL,
  project: import.meta.env.VITE_APPWRITE_PID,
  database: import.meta.env.VITE_APPWRITE_DBID,
}

class AppWriteService {
  client = new Client()
  database

  constructor() {
    this.client.setEndpoint(config.url).setProject(config.project)
    this.database = new Databases(this.client)
  }
}

const appWrite = new AppWriteService()

export default appWrite
