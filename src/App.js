import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import TourPreview from "./components/pages/TourPreview";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const renderFooter = location.pathname !== "/tour-preview";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tour-preview" element={<TourPreview />} />
      </Routes>
      {renderFooter && <Footer />}
    </>
  );
}

export default App;
