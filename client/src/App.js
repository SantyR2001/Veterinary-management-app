import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <h1 className="text-danger text-center mt-5">
              {" "}
              404: PAGE NOT FOUND{" "}
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
