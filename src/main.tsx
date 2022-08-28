import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SupabaseProvider } from './utils/supabase'
import { MantineProvider } from '@mantine/core';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SupabaseProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        colorScheme: "dark",
        fontFamily: "Poppins",
      }}>
        <App />
      </MantineProvider>
    </SupabaseProvider>
  </React.StrictMode>
)
