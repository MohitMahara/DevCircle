import React from "react";
import "./styles/App.css";
import { Routes, Route, Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return <>
  <Toaster position="top-center" /> 
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/profile" element={<ProfilePage/>} />
    <Route path="/messages" element={<ChatPage/>} />
    <Route path="/contactUs" element={<ContactUsPage/>} />

  </Routes>
  
  </>;
}

export default App;
