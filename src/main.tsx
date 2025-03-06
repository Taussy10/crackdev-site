import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { ClerkProvider } from '@clerk/clerk-react'


const authKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!authKey) {
  console.log("error from main.tsx");
throw new Error("Add your Clerk publishable key to the .env file")  
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={authKey} afterSignOutUrl= "/">
    <App />
    </ClerkProvider>
  </StrictMode>,
)
