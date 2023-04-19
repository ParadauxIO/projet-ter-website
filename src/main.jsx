import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil'
import Index from './views/Index';
import "./global.scss"
import Home from './views/Home';
import AllColumnsJoined from './views/tables/AllColumnsJoined';
import DerivedTableView from './views/tables/DerivedTableView';
import { dbCoordinateColumnsState } from './state/atoms/dbDataAtom';

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
      element: <DerivedTableView 
                 title="Coordinates Data"
                 subtitle="Shows co-ordinate data."
                 columnsState={dbCoordinateColumnsState}
               />
    }
    ]
  },

]);

function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </React.StrictMode>
  );

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
