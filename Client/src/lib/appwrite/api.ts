import type { INewUser } from "../../types";
import { account, avatars, databases, appwriteConfig } from "./config";
import { ID, Query } from "appwrite";

// ✅ Create User Account
export async function createUserAccount(user: INewUser) {
  try {
    // 1. Create Auth account
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw new Error("Account creation failed");

    // 2. Auto login user after sign up
    await signInAccount({ email: user.email, password: user.password });

    // 3. Create avatar
    const avatarUrl = avatars.getInitials(user.name);

    // 4. Save user profile in DB (permissions handled automatically via logged-in user)
    const newUser = await databases.createDocument(
      appwriteConfig.databaseid,
      appwriteConfig.usercollectionid,
      ID.unique(),
      {
        accountId: newAccount.$id,
        name: newAccount.name,
        email: newAccount.email,
        username: user.username,
        imageUrl: avatarUrl.toString(),
      }
    );

    return { account: newAccount, profile: newUser };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

// ✅ Sign In
export async function signInAccount(user: { email: string; password: string }) {
  try {
    // check if already logged in
    const current = await account.get().catch(() => null);

    if (current) {
      // already signed in, just return current session
      return current;
    }

    // otherwise create session
    return await account.createEmailPasswordSession(
      user.email,
      user.password
    );
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}


// ✅ Sign Out
export async function signOutAccount() {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

// ✅ Get Current Account
export async function getAccount() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}

// ✅ Get Current User Profile
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) return null;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseid,
      appwriteConfig.usercollectionid,
      [Query.equal("accountId", currentAccount.$id)]
    );

    return currentUser.documents[0];
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}
