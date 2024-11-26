import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterPage from "./pages/FilterPage";
import { SearchProvider } from "./context/SearchContext";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<FilterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        </Routes>
        <Footer />
      </Router>
    </SearchProvider>
  );
};

export default App;
