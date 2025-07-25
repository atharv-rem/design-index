import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import {HeadProvider} from 'react-head'
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2025-05-24',
}
const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

if (GA_ID && location.hostname !== 'localhost') {
  // Load GA script dynamically
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_ID);
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <HeadProvider>{/*helps to add meta tags to each page*/}
        <Router> {/*helps to navigate by making changes in the URL*/}
          <App />
        </Router>
      </HeadProvider>
    </PostHogProvider>
  </StrictMode>,
)