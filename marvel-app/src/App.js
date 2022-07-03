import "./App.css";
import axios from "axios";
import { Component, useEffect } from "react";
import { useState } from "react";
import CharacterCard from "./CharacterView";
import ComicScreen from "./Comic";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import TestScreen from "./Test";
import { Link } from "react-router-dom";
import Header from "./Header";
const hash = "c41cec366ac6c477f37e5a15e5717be2";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route index element={<ComicScreen />} /> */}
          <Route index element={<CharacterCard />} />
          <Route path="/comic" element={<ComicScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
