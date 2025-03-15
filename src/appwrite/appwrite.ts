import { Client, Databases,  Query, } from "appwrite";


let client = new Client()
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


// Get all documents 
export const getData = async()=>{
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


// Get all the totalTime 
export const getTotalTime = async() =>{
    try {
        const promise = await databases.listDocuments(
            config.databasesId,
            config.collectionId,
            [
                Query.select(["totalTime", "username"])
            ]

        ) 
        console.log("getTotalTime from appwrite.ts " ,promise.documents);
        
        return promise.documents
    } catch (error:any) {
        console.log(error);
        throw new Error(error.message)
        
        
    }
}

// Update username in document 
// export const addUserName = async(id:string|undefined , username: string|undefined|null) =>{
   
//     try {
        
//         const addUser = await databases.updateDocument(
//             config.databasesId,
//             config.collectionId,
//             // why use type assertation ? 
//             //  cause by params id can conting undefined or string 
//             // updateDocument need only string no undefined
//             // so either check it by if statement or jabardasti give type
//             id as string,
//             // "user_2u4sfqP3WoZP3vr2matwdbqy51y",
//             {
//                 "username": username 
//             }
//         ) 
//         console.log("Promise from appwrite.ts " ,addUser);
        
    
//     } catch (error:any) {
//         console.log("Error from appwrite.ts",error);
//         throw new Error(error.message)
        
        
//     }
// }

