import React from "react";
import "./styles/App.css";
import { Routes, Route, Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage";

function App() {
  return <>
  <Toaster position="top-center" /> 
  <Routes>
    <Route path="/" element={<HomePage/>} />
  </Routes>
  
  </>;
}

export default App;
