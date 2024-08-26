import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer/>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<SignUp />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
