import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import api from "./api/axios";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  const apiCall = async () => {
    try {
      const response = await api.get("/quotes");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
