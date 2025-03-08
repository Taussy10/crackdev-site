import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes , Route } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './app'


const authKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!authKey) {
  console.log("error from main.tsx");
throw new Error("Add your Clerk publishable key to the .env file")  
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* clerkProvider: same as React context in which you share the 
    the data to each page of an app: you have worked in Aora app
    */}
    <ClerkProvider publishableKey={authKey} afterSignOutUrl= "/">
   <Routes>
    <Route  path='/' element={<App />} />
   </Routes>
    </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
