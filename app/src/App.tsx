import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { RegisterPartcipant } from './participants/participantsRegister';
import { CreateEvent } from './admins/createEvents';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Dashboard } from './admins/dashboard';
import { ListUsers } from './admins/listUsers';
import { ListTeams } from './admins/listTeams';
import { ListEvents } from './admins/listEvents';
import { CreateTeam } from './participants/createTeam';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Dashboard />
  },
  {
    path: "/user/list",
    element: <ListUsers />
  },
  {
    path: "/teams/list",
    element: <ListTeams />
  },
  {
    path: "/event/list",
    element: <ListEvents />
  },
  {
    path: "/registro",
    element: <RegisterPartcipant />,
  },
  {
    path: "/crearEvento",
    element: <CreateEvent />,
  },
  {
    path: "/crearTeam",
    element: <CreateTeam />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
