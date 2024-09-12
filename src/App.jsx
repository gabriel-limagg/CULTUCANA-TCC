import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Apresentaçao from './pages/Apresentaçao';
import Ultilização from './pages/Ultilização';
import Materiais from './pages/Materiais';
import Final from './pages/Final';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/apresentacao",
    element: <Apresentaçao/>
  },
  {
    path: "/guia de ultilizaçao",
    element: <Ultilização/>
  },
  {
    path: "/materiais",
    element: <Materiais/>
  },
  {
    path: "/quem somos",
    element: <Final/>
  }

]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

