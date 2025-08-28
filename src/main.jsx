// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LenisProvider } from './context/LenisContext.jsx'
import { ActiveSectionProvider } from './context/ActiveSectionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LenisProvider>
      {/* The ActiveSectionProvider must wrap your App component */}
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </LenisProvider>
  </React.StrictMode>,
)