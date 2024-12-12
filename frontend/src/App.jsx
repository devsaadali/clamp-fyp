import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import { Typography, Box } from "@mui/material";
import "./styles/App.css";
import Footer from "./components/Footer";
import CoursesPage from "./pages/CoursesPage";
import ResourcesPage from "./pages/ResourcesPage";
import InstitutesPage from "./pages/InstitutesPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#EDEDED",
      }}
    >
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/institutes" element={<InstitutesPage />} />
          <Route path="/courses/:instituteID" element={<CoursesPage />} />
          <Route path="/resources/:courseID" element={<ResourcesPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
