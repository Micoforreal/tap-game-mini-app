import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TelegramContextProvider } from './context/Telegram.jsx'
import { UserContextProvider } from './context/User.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelegramContextProvider>
      <UserContextProvider>
      <Toaster/>
    <App />
      </UserContextProvider>
    </TelegramContextProvider>
  </StrictMode>,
)
