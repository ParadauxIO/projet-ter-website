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
import DerivedTableView from './views/tables/DerivedTableView';
import AIAssistant from './views/AIAssistant';
import MapView from './views/MapView';
import AddRow from './views/AddRow';
import TestPage from './views/TestPage';
import { dbItemsDataState, dbItemsHandbookDataState, dbItemsHarvardListDataState, dbItemsLocationDataState, dbItemsMapDataState, dbItemsProtectedMonumentsDataState, dbItemsRootDataState } from './state/atoms/dbDataAtom';

export const tableRoutes = [
  {
    path: "all",
    title: "All Data",
    subtitle: "All tables joined together (Largely illegible)",
    state: dbItemsDataState
  },
  {
    path: "root-data",
    title: "Base Table",
    subtitle: "Data that concerns all records.",
    state: dbItemsRootDataState
  },
  {
    path: "location-data",
    title: "Location Data",
    subtitle: "Details about a sample's coordinates",
    state: dbItemsLocationDataState
  },
  {
    path: "harvard-list-data",
    title: "Harvard Long List Data",
    subtitle: "Data from Harvard",
    state: dbItemsHarvardListDataState
  },
  {
    path: "map",
    title: "Map Data",
    subtitle: "Map",
    state: dbItemsMapDataState
  },
  {
    path: "handbook-data",
    title: "Handbook Data",
    subtitle: "Data from Handbooks",
    state: dbItemsHandbookDataState
  },
  {
    path: "lpm-data",
    title: "LPM Data",
    subtitle: "List of Protected Monuments Data",
    state: dbItemsProtectedMonumentsDataState
  }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [{
      index: true,
      element: <Home/>
    },
    {
      path: "maps",
      element: <MapView/>
    },
    {
      path: "add",
      element: <AddRow/>
    },
    {
      path: "test",
      element: <TestPage/>
    },
    {
      path: "table",
      children: [
        {
          index: true,
          element: <p>Invalid route</p>
        },
        ...tableRoutes.map(tableRoute => ({
          path: tableRoute.path,
          element: (
            <DerivedTableView
              title={tableRoute.title}
              subtitle={tableRoute.subtitle}
              state={tableRoute.state}
            />
          )
        }))
      ]
    }, 
    {
      path: "assistant",
      element: <AIAssistant/>
    }
  ]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render((
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
))
