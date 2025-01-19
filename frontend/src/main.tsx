import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css' 
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { RouterProvider } from 'react-router'
import { router } from './config/router.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
