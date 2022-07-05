import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import ComicScreen from "./Comic";
import Home from "./Home";
import CharacterCard from "./CharacterView";
import ComicDetailScreen from "./ComicDetails";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/characterview" element={<CharacterCard />} />
          <Route path="/comic" element={<ComicScreen />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
