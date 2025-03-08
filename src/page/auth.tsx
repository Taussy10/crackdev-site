import React from 'react'

const Auth = () => {
  const twitterSignIn = async() => {
    const sign =  await  signedIn.signIn?.authenticateWithRedirect({
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