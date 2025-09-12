import type { INewUser } from "../../types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID , Query } from "appwrite";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw new Error("Account creation failed");

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return { account: newAccount, profile: newUser };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error };
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: string; // changed from URL
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseid,
      appwriteConfig.usercollectionid,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.error("Error saving user to DB:", error);
    throw error;
  }
}

export async function signInAccount(user: {email: string, password: string}) {
  try {

    const session = await account.createSession(user.email, user.password)
    return session

  } catch (error) {
    console.log(error)
  }
  
}

// ============================== GET ACCOUNT
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    console.log(error);
  }
}


// ============================== GET USER
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseid,
      appwriteConfig.usercollectionid,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
