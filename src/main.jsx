import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TelegramContextProvider } from './context/Telegram.jsx'
import { UserContextProvider } from './context/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelegramContextProvider>
      <UserContextProvider>
    <App />
      </UserContextProvider>
    </TelegramContextProvider>
  </StrictMode>,
)
