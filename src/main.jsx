import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const scrollTo = (id)=>{document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}
window.__scrollTo = scrollTo
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
