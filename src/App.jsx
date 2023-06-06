import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "./api/axios";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const QUOTES_URL = "/quotes"

function App() {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("token")) {
      return JSON.parse(localStorage.getItem("token"));
    }
    return null;
  });

  const [quotesData, setQuotesData] = useState([])

  const apiCallQuotes = async () => {
    try {
      const response = await axios.get(QUOTES_URL);
      // console.log(response.data.data)
      setQuotesData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiCallQuotes();
  }, []);


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home user={user} quotesData={quotesData}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login" element={<Login user={user} setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
