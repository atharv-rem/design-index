import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import {HeadProvider} from 'react-head'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadProvider>{/*helps to add meta tags to each page*/}
      <Router> {/*helps to navigate by making changes in the URL*/}
        <App />
      </Router>
    </HeadProvider>
  </StrictMode>,
)
