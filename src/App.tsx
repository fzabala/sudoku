import React from 'react';
import './App.scss';
import { HomePage } from "./pages";
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';

function App() {

  const routes = [
    {
      path: '/',
      component: <HomePage />,
      exact: true
    },
  ];

  return (
    <div className="App">
      <Routes>
        {
          routes.map((route, index) => (
            <Route
              {...route}
              key={index}
              element={
                <Layout>{route.component}</Layout>
              }
            />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
