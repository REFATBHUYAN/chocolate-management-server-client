import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolate from './components/AddChocolate.jsx';
import EditChocolate from './components/EditChocolate.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch('http://localhost:5000/chocolate'),
    element: <App></App>,
  },
  {
    path: "/chocolate",
    element: <AddChocolate></AddChocolate>
  },
  {
    path: "/chocolate/edit/:id",
    loader: ({params}) => fetch(`http://localhost:5000/chocolate/${params.id}`),
    element: <EditChocolate></EditChocolate>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
