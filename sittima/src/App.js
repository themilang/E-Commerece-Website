import React from "react";
import "./App.css";
import Navigation from "./customer/component/Navigation/Navigation";
import Footer from "./customer/component/footer/Footer";
import HomePage from "./customer/pages/HomePage/HomePage";
import ProductDetailsPage from "./customer/pages/ProductDetailsPage/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
 
    
    <Router>
      <>
      <Navigation/>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<HomePage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
