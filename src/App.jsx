import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Dashboard from "./Dashboard"
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Dashboard"
          element={
              <Dashboard />
          }
        />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
