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
    maskAllInputs: false, 
    recordCanvas: false,
  },
  disable_surveys: true,
  disable_toolbar: true,
  disable_feature_flags: true,
  disable_compression: true,
  disable_session_recording: true,
}

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY

if (POSTHOG_KEY && location.hostname !== 'localhost') {
  window.addEventListener('load', () => {
    import('posthog-js').then((posthog) => {
      posthog.init(POSTHOG_KEY, options)
    })
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
