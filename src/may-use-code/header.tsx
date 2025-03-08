import image from "../assets/react.svg"
import { SignInButton} from "@clerk/clerk-react"
import { useSignIn  , useUser} from "@clerk/clerk-react"


const Header = () => {
  const user = useUser()
  const signedIn = useSignIn()

  console.log("name",user.user?.id)
  
  
  
  const twitterSignIn = async () => {
    if (!signedIn) {
      console.error("Sign-in instance not available.");
      return;
    }

    try {
      await signedIn.signIn?.authenticateWithRedirect({
        strategy: 'oauth_twitter',
        redirectUrl: 'https://direct-jaguar-15.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2F',
        redirectUrlComplete: "",
      });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  
  return (
    <div className=" flex flex-row items-center justify-between
     ">

<img src={image} />  
    
    {/* Container for logo and coffee  */}
    <div className="  flex flex-col items-center ">
<h1 className="text-2xl font-bold text-amber-500 ">CrackDev</h1>
<img src={image} />  
    </div>

{/* Will write here something */}
<div
className="h-10 p-2 w-24 bg-amber-500 rounded-xl"
>
<SignInButton />
</div>

 {/* 
<button
  // onClick={() => twitterSignIn()}
className="  h-10 p-2 w-24 bg-amber-500 rounded-xl">

 <h1 className=" text-white font-bold ">Join It</h1> 
</button>*/}


<div className="text-2xl font-bold underline text-blue-500">
    
  </div>
    </div>

  )
}

export default Header