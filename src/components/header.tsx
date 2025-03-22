import image from "../assets/react.svg"
import {addUserDetails, handleLogin, user } from "../supabase/supabase"
import { useEffect } from "react"


const Header = () => {
  // For checking that only run useEffect when there is no user.id 
  // if (!user?.id) {
    useEffect(() => {
      const adduser = async() => {
        try {
     const add =  await addUserDetails(userId ,username, avatar )
      console.log("user has added:", add);
        } catch (error:any) {
          console.log(error.message);
          throw new Error(error.message)
        }
      }
      adduser()
      }, [user?.id])
  // }
 

  
  const userId = user?.id
  const username = user?.user_metadata.user_name
  const avatar = user?.user_metadata.avatar_url

// console.log("ueser :" ,user);
// console.log("ueser :" ,config.url);

  
// const username = user.user?.username
  // console.log("username :" ,user.user?.username);
  // console.log("Id :" ,user.user?.id);

 
  return (

    <div className=" flex flex-row items-center  justify-between
    bg-red-500  px-6 py-2 ">

    {/* Container for logo and coffee  */}
  <div className="  flex flex-row items-center gap-3 ">
<h1 className=" text-5xl font-bold text-amber-500 ">Crackdev</h1>
{/* <button 
  className="   flex flex-row items-center justify-center h-10 p-2 w-24 bg-amber-500 rounded-xl"
  onClick={() => {adduser()}} >
    Update user
    </button> */}

<img src={image} 
className="size-12"/>  

 </div>



{
user !== null ? (
<div
  className="   flex flex-row items-center justify-center h-10 p-2 w-auto bg-amber-500 rounded-xl">
  <h1 className=" text-white">{user?.id}</h1>
  </div>
): (

  <button 
  className="   flex flex-row items-center justify-center h-10 p-2 w-24 bg-amber-500 rounded-xl"
  onClick={() => {handleLogin()}} >
    SignUp
    </button>

  
)
}



    </div>

  )
}

export default Header