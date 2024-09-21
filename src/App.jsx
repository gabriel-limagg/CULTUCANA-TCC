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
import ChatbotCanaa from './componentes/ChatbotCanaa';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/apresentacao",
    element: <Apresentaçao />,
  },
  {
    path: "/guia-de-utilizacao",
    element: <Ultilização />,
  },
  {
    path: "/materiais",
    element: <Materiais />,
  },
  {
    path: "/quem-somos",
    element: <Final />,
  },
  {
    path: "/canaa",
    element: <ChatbotCanaa/>
  }
]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

