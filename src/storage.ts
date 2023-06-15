import env from '@lib/env'
import { Client, Storage } from 'node-appwrite'

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(env.VITE_PROJECT_ID)
  .setKey(env.VITE_API_KEY)

const storage = new Storage(client)

export default storage
