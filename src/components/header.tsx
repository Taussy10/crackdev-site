import image from "../assets/react.svg"
import { SignInButton} from "@clerk/clerk-react"
import { useSignIn  , useUser} from "@clerk/clerk-react"


const Header = () => {
  const user = useUser()
  const signedIn = useSignIn()

  console.log("name",user.user?.id)
  
  
  
  
  
  return (
    <div className=" flex flex-row items-center  justify-between
    bg-red-500  px-6 py-2 ">

    {/* Container for logo and coffee  */}
  <div className="  flex flex-row items-center gap-3 ">
<h1 className=" text-5xl font-bold text-amber-500 ">Crackdev</h1>
<img src={image} 
className="  size-12"
/>  
    </div>

{/* For button */}
<div
className="   flex flex-row items-center justify-center h-10 p-2 w-24 bg-amber-500 rounded-xl">
<SignInButton />
</div>


    </div>

  )
}

export default Header