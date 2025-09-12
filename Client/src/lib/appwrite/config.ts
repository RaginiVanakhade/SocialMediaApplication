import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
  projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  databaseid: import.meta.env.VITE_APPWRITE_DATABASED_ID,
  storageid: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  usercollectionid: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postcollectionid: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savecollectionid: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID
}

export const client = new Client();

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client)