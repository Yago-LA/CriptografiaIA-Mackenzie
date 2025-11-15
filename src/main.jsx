import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";

const router = createBrowserRouter([
    { path: '/', element: <App/>},
    { path: '*', element: <NotFoundPage/> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
