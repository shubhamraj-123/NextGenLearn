import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {appStore} from './app/store'
import { Toaster } from './components/ui/sonner'
import { ToastContainer } from 'react-toastify'
import { useLoadUserQuery } from "./features/api/authApi";
import LoadingSpinner from "./components/LoadingSpinner";

const Custom=({children}) => {
  const {isLoading} = useLoadUserQuery(); // for in navbar.. loading mei signup signin nhi show krne ke liye oly profile
  return (
    <>
    {
      isLoading ? <LoadingSpinner/> : <>{children}</>
    }
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <Custom>
        <App />
        <Toaster/>
      </Custom>
      {/* <App /> */}
      {/* <Toaster/> */}
      {/* <ToastContainer /> */}
    </Provider>
  </StrictMode>,
)
