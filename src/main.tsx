import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SupabaseProvider } from './utils/supabase'
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
          colorScheme: "dark",
          fontFamily: "Poppins",
        }}>
          <App />
        </MantineProvider>
      </SupabaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
