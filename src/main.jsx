import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './parts/Home'
import Chat from './parts/Chat'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Chat />
  </StrictMode>,
)
