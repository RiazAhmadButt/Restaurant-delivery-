import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AllRestaurants from "./pages/AllRestaurants/AllRestaurants";
import SelectItem from "./pages/SelectItem/SelectItem";
import Payment from "./pages/Payment/Payment";
import {CartProvider} from './Context/CartContext';

function App() {
  // State to manage authentication
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Function to simulate login (you'll replace this with actual login logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to simulate logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <CartProvider>
    <Router>
      {isAuthenticated && <Navbar handleLogout={handleLogout} />}{" "}
      {/* Navbar only if authenticated */}
      <Routes>
        {/* <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
        /> */}
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
       
       <Route
          path="/all-restaurants/:id"
          element={
            isAuthenticated ? (
             
                <AllRestaurants />
             
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        
        <Route
          path="/payment"
          element={isAuthenticated ? <Payment /> : <Navigate to="/login" />}
        />
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
    </CartProvider>
  );
}

export default App;
