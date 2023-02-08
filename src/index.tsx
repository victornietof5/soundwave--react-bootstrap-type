import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, Routes } from 'react-router-dom';
import { Discover } from './components/Discover';
import { Join } from './components/JoinButton';
import App from './App';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



// const router = createBrowserRouter([

//   {
//     path: '/discover',
//     element: <Discover />,
//   },
//   {
//     path: '/join',
//     element: <Join />,
//   },

// ]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>

   <App />

  </React.StrictMode>
);
