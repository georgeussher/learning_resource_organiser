import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page";

import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Topic, { loader as topicLoader } from "./routes/week";


//this is the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/topics/:topicId",
        element: <Topic />,
        loader: topicLoader
      },
    ],
  },
  
])

//this is rendering the website
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
