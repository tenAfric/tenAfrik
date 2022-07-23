import React from 'react'
import './styles/css/index.css'
import './styles/css/globals.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as SW from './includes/sw'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
SW.register();
