import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import { QueryProvider } from './appwrite/react-query/queryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <QueryProvider>
  <AuthProvider>
    <StrictMode>
    <App />
  </StrictMode>
  </AuthProvider>
  </QueryProvider>
  </BrowserRouter>

)
