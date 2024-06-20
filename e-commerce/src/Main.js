import React from "react";
// import AppNavBar from "./components/navbar/AppNavBar";
// import Banner from "./components/banner/Banner";

import { AppNavBar, Banner } from "./components";
import { LoginPage, RegisterPage, HomePage } from "./pages";
import { ProductPage } from "./users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";

const Main = () => {
  return (
    <>
      {/* <Banner /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}

      <Router>
        <AppNavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
