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
import EditTopic, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";


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
      {
        path: "/topics/:topicId/edit",
        element: <EditTopic />,
        loader: topicLoader,
        action: editAction
      },
      {
        path: "topics/:topicId/destroy",
        action: destroyAction,
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
