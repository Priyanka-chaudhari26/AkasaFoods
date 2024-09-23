import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Screens/HomeScreen";
import SignupScreen from "./components/Screens/SignupScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import CartScreen from "./components/Screens/CartScreen";
import ContactScreen from "./components/Screens/ContactScreen";
// import Product from "./components/Product";
import ProductScreen from "./components/Screens/ProductScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Container>
          <h1>Welcome to Food Ordering Portal</h1>
        </Container> */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/contactus" element={<ContactScreen />} />
          {/* <Route path="/product/:id" element={<Product />} /> */}
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
