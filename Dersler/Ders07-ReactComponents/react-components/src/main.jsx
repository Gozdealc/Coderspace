import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Tek bir kapsayıcı eleman kabul ediyor içine.
  <StrictMode>
    <App />
  </StrictMode>,
  // <>
  // <App />
  // <App />
  // <App />
  // </>
)
