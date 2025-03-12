import image from "../assets/react.svg"
import { SignInButton} from "@clerk/clerk-react"
import { useSignIn  , useUser} from "@clerk/clerk-react"


const Header = () => {
  const user = useUser()
  const signedIn = useSignIn()

const id = user.user?.id

// const username = user.user?.username
  console.log("username :" ,user.user?.username);
  console.log("Id :" ,user.user?.id);

  return (

    <div className=" flex flex-row items-center  justify-between
    bg-red-500  px-6 py-2 ">

    {/* Container for logo and coffee  */}
  <div className="  flex flex-row items-center gap-3 ">
<h1 className=" text-5xl font-bold text-amber-500 ">Crackdev</h1>
<img src={image} 
className="size-12"/>  

 </div>
{
user.isSignedIn === false ? (
<div
className="   flex flex-row items-center justify-center h-10 p-2 w-24 bg-amber-500 rounded-xl">
<SignInButton />
</div>
): (
  <div
  className="   flex flex-row items-center justify-center h-10 p-2 w-auto bg-amber-500 rounded-xl">
  <h1 className=" text-white">{id}</h1>
  </div>
)
}



    </div>

  )
}

export default Header