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
import { dbAclsAtlasColumnsState, dbAclsMapColumnsState, dbCaAtlasColumnsState, dbColumnsState, dbCoordinateColumnsState, dbHarvardLongListColumnsState, dbLpmColumnsState, dbSampleRootColumnsState, dbZoneColumnsState } from './state/atoms/dbDataAtom';
import AIAssistant from './views/AIAssistant';

export const tableRoutes = [
  {
    path: "all",
    title: "All Data",
    subtitle: "All tables joined together (Largely illegible)",
    state: dbColumnsState
  },
  {
    path: "sample-root",
    title: "Base Table",
    subtitle: "Data that concerns all records.",
    state: dbSampleRootColumnsState
  },
  {
    path: "sample-coordinates",
    title: "Sample Coordinate Data",
    subtitle: "Details about a sample's coordinates",
    state: dbCoordinateColumnsState
  },
  {
    path: "harvard-long-list",
    title: "Harvard Long List Data",
    subtitle: "Data from Harvard",
    state: dbHarvardLongListColumnsState
  },
  {
    path: "acls-map",
    title: "ACLS Map Data",
    subtitle: "Map details from ACLS",
    state: dbAclsMapColumnsState
  },
  {
    path: "acls-atlas",
    title: "ACLS Atlas Data",
    subtitle: "Atlas details from ACLS",
    state: dbAclsAtlasColumnsState
  },
  {
    path: "ca-atlas",
    title: "CA Atlas",
    subtitle: "Atlas details from CA",
    state: dbCaAtlasColumnsState
  },

  {
    path: "lpm-data",
    title: "LPM Data",
    subtitle: "Data from LPM",
    state: dbLpmColumnsState
  },

  {
    path: "zone",
    title: "Italy Zone Data",
    subtitle: "Zone informations",
    state: dbZoneColumnsState
  },
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
              columnsState={tableRoute.state}
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
