import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Course from "./CoursePage/Course";
import AuthForm from "./AuthForm/AuthForm";
import Home from "./HomePage/Home";
import Dashboard from "./Dashboards/Dashboard";
import ActiveTabProvider from "./ActiveTabProvider/ActiveTabProvider";

function App() {
  return (
    <ActiveTabProvider>
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/login" element={<AuthForm isLogin={true} />} />
      <Route path="/signup" element={<AuthForm isLogin={false} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </ActiveTabProvider>
  );
}

export default App;
