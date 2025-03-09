import { Client, Account, Databases, Query, } from "appwrite";

let client = new Client()
let account = new Account(client)
let databases = new Databases(client)

export const config = {
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databasesId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_Data_Collection_ID,
    key: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
}


client.setEndpoint(config.endpoint)
.setProject(config.projectId)

export const getData = async() =>{
    try {
        const promise = await databases.listDocuments(
            config.databasesId,
            config.collectionId,
        ) 
        console.log("Promise from appwrite.ts " ,promise.documents);
        
        return promise.documents
    } catch (error:any) {
        console.log(error);
        throw new Error(error.message)
        
        
    }
}

export const getTotalTime = async() =>{
    try {
        const promise = await databases.listDocuments(
            config.databasesId,
            config.collectionId,
            [
                Query.select(["totalTime", "username"])
            ]

        ) 
        console.log("Promise from appwrite.ts " ,promise.documents);
        
        return promise.documents
    } catch (error:any) {
        console.log(error);
        throw new Error(error.message)
        
        
    }
}

export const addUserName = async(id:any, username: string) =>{
    try {
        const addUser = await databases.updateDocument(
            config.databasesId,
            config.collectionId,
            id,
            {
                "username": username 
            }
        ) 
        console.log("Promise from appwrite.ts " ,addUser);
        
    
    } catch (error:any) {
        console.log("Error from appwrite.ts",error);
        throw new Error(error.message)
        
        
    }
}