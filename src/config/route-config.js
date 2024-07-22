import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Calendar from '../Calendar/Calendar'
import Login from '../Login/Login'


export const router = createBrowserRouter([
  {
    path:'/Login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Calendar />,
  },
]);