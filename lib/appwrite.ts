export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    platform: process.env.APPWRITE_PLATFORM,
    databaseId: process.env.APPWRITE_DATABASE_ID,
    userCollectionId: process.env.APPWRITE_USER_COLLECTION_ID,
};
