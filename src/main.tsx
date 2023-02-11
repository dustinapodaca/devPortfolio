import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Routes/root';
import Error from './Components/ErrorHandler';
import './index.css'

//router imports
import {
  createBrowserRouter, 
  RouterProvider  
} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/about', element: <Root /> },
  { path: '/portfolio', element: <Root /> },
  { path: '/contact', element: <Root /> },
  { path: '/resume', element: <Root /> },
  { path: '/404', element: <Error /> },
  { path: '*', element: <Root /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
