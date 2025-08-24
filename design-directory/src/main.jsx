import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { HeadProvider } from 'react-head'
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  capture_pageview: true,
  capture_pageleave: true,
  capture_pageview_autocapture: true,

  session_recording: {
    maskAllInputs: false, // or true if you want sensitive data hidden
    recordCanvas: true,
  },
  disable_surveys: true,
  disable_toolbar: true,
  disable_feature_flags: true,
  disable_compression: true,
  disable_session_recording: false, // keep recordings enabled
}

const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID
const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY

// --- Lazy load GA ---
if (GA_ID && location.hostname !== 'localhost') {
  window.addEventListener('load', () => {
    import('posthog-js').then((posthog) => {
      if (POSTHOG_KEY) {
        posthog.init(POSTHOG_KEY, options)
      }
    })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(){ window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', GA_ID)
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* PostHogProvider still wraps App so hooks/components work */}
    <PostHogProvider apiKey={POSTHOG_KEY} options={options}>
      <HeadProvider>
        <Router>
          <App />
        </Router>
      </HeadProvider>
    </PostHogProvider>
  </StrictMode>,
)
