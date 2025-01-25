import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css' 
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { RouterProvider } from 'react-router'
import { router } from './config/router.ts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer/>
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
