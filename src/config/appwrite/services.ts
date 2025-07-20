import {
  Client,
  Account,
  Avatars,
  Databases,
  Storage,
  ID,
  Query,
} from "appwrite";
import { appwriteConfig } from "./envs";
import type { INewUser } from "@/types";

const {
  APPWRITE_API_ENDPOINT,
  APPWRITE_PROJECT_ID,
  APPWRITE_DATABASE_ID,
  APPWRITE_BUCKET_ID,
  APPWRITE_USERS_COLLECTION_ID,
  APPWRITE_POSTS_COLLECTION_ID,
  APPWRITE_SAVES_COLLECTION_ID,
  APPWRITE_DEV_KEY,
} = appwriteConfig;

const client = new Client();
client
  .setEndpoint(APPWRITE_API_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID)
  .setDevKey(APPWRITE_DEV_KEY);

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

    if (!newAccount) {
      throw Error;
    }

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDb({
      accountId: newAccount.$id,
      email: newAccount.email,
      name: newAccount.name,
      imageUrl: avatarUrl,
      username: user.username,
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function saveUserToDb(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: string;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_USERS_COLLECTION_ID,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );

    return session;
  } catch (error) {
    console.error(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      APPWRITE_DATABASE_ID,
      APPWRITE_USERS_COLLECTION_ID,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.error(error);
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.error(error);
  }
}
