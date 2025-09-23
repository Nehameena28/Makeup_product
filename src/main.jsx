import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LikedProvider } from './Component/LikedContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(

   <StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <LikedProvider>
               <App />
            </LikedProvider>
         </AuthProvider>
      </BrowserRouter>
   </StrictMode>
)
