// App.js
import React, { useState, useEffect } from 'react';
import Loader from './customer/component/loader/loader';
import Navigation from "./customer/component/Navigation/Navigation";
import Footer from "./customer/component/footer/Footer";
import HomePage from "./customer/pages/HomePage/HomePage";
import ProductDetailsPage from "./customer/pages/ProductDetailsPage/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./customer/component/Cart/Cart";
import './App.css'; // Import your main component styles

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay or asynchronous operation (e.g., API call)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product-details" element={<ProductDetailsPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </>
    </Router>
  );
};

export default App;
