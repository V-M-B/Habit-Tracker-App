import { Account, Client, Databases } from 'react-native-appwrite';
export const client =new Client()
.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)

const account = new Account(client);
export { account };



export const databases = new Databases(client);
export const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
export const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
export const COMPLETIONS = process.env.EXPO_PUBLIC_COMPLETIONS_COLLECTION_ID!;



export interface RealtimeResponse{
    events: string[];
    payload:any;
}