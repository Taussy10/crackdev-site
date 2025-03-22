import {createClient} from "@supabase/supabase-js"
import { v4 as uuidv4 } from "uuid"

export const config = {
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_API_KEY,
}

const supabase = createClient(config.url, config.key)

export const handleLogin = async() => {
  try {
    const { data, error } = await  supabase.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: 'http://localhost:5173/'
      }
    })
    console.log("Data from supabse.tsx :" ,data);
  } catch (error:any) {
    console.log("Error from supabase.ts :" ,error);
    throw new Error(error.message)
    
    
  }
  
  }

 export const { data: { user } } = await supabase.auth.getUser()

 export const addUserDetails = async (userId: string | undefined, userName: string, avatar: string) => {

  // firstly check wheter these things exist or not 
  // If not then end the code no need to run next part 
  if (!userId || !userName || !avatar) {
    console.log("Invalid data: id, username, or avatar is missing.");
    return;
  }
// If exist then run below code 

  try {
    const {data , error } = await supabase
      .from("developer")
      .insert([{
        id: uuidv4(),
        userId: userId, 
        userName: userName,
        avatar: avatar,
       
      }])
      .select() 
      console.log("Data from supabse.ts :" ,data );
  } catch (error: any) {
    console.log("Error from supabase.ts:", error);
    throw new Error(error.message);
  }
};



export const getAllUser = async () => {
// If exist then run below code 

  try {
    const {data:developer , error } = await supabase
      .from("developer")
      .select() 
      // you have to return the data to use it 
      return developer
      console.log("Data from supabse.ts :" ,developer);
  } catch (error: any) {
    console.log("Error from supabase.ts:", error);
    throw new Error(error.message);
  }
};