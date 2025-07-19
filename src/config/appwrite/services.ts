import { Client, Account, Avatars, Databases, Storage, ID } from "appwrite";
import { appwriteConfig } from "./envs";
import type { INewUser } from "@/types";

const { APPWRITE_API_ENDPOINT, APPWRITE_PROJECT_ID } = appwriteConfig;

const client = new Client();
client.setEndpoint(APPWRITE_API_ENDPOINT).setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export async function createNewUser(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAccount;
  } catch (error) {
    console.error(error);
    return error;
  }
}
