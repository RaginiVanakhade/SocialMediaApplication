import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.js'
import { QueryProvider } from './appwrite/react-query//queryProvider.js'
import { Provider } from 'react-redux'
import store from './redux/Store'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <QueryProvider>
  <AuthProvider>
    <Provider store={store}>
    <StrictMode>
    <App />
  </StrictMode>
  </Provider>
  </AuthProvider>
  </QueryProvider>
  </BrowserRouter>

)
