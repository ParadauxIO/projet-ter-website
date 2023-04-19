import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil'
import Index from './views/Index';
import "./global.scss"
import CoordinatesView from './views/tables/CoordinatesView';
import Home from './views/Home';
import AllColumnsJoined from './views/tables/AllColumnsJoined';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [{
      index: true,
      element: <Home/>
    },
    {
      path: "all",
      element: <AllColumnsJoined />
    },
    {
      path: "coordinates",
      element: <CoordinatesView />
    }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
