import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegPage/RegPage";
import MainPage from "./pages/MainPage/MainPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="catalog" element={<MainPage />} />
        <Route path="designers" element={<MainPage />} />
        <Route path="sales" element={<MainPage />} />
        <Route path="questions" element={<MainPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
