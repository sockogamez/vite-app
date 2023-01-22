import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { PersonContextProvider } from './context/PersonContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonContextProvider>
      <App />
    </PersonContextProvider>
  </React.StrictMode>,
)
