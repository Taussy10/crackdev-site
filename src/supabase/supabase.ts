import {createClient} from "@supabase/supabase-js"

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
