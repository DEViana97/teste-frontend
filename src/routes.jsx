import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Users";

export function Rout() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/usuarios" element={<Users />} />
    </Routes>
  );
}
