import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Course from "./CoursePage/Course";
import Login from "./LoginPage/Login";
import Home from "./HomePage/Home";
import Dashboard from "./Dashboards/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Course />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
