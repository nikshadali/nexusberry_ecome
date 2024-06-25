import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartContexProvider } from './hook/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContexProvider>
    <App />
  </CartContexProvider>,
)
