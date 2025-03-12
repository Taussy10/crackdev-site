import React from 'react'
import { SignIn } from '@clerk/clerk-react'
const Auth = () => {
  const twitterSignIn = async() => {
    const sign =  await  SignIn.signIn?.authenticateWithRedirect({
      strategy: 'oauth_twitter',
      redirectUrl: 'http://localhost:5173/',
      redirectUrlComplete: ""
    })
    console.log("SignIn" ,sign);
   }
   
  return (
    <div>Auth</div>
  )
}

export default Auth