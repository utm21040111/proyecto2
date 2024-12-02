import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { RegisterPartcipant } from './participants/participantsRegister';
import { CreateEvent } from './admins/createEvents'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/registro",
    element: <RegisterPartcipant/>,
  },
  {
    path: "/crearEvento",
    element: <CreateEvent/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
