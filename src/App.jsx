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
  const [success, setSuccess] = useState(false);
  const [quotesData, setQuotesData] = useState([])

  const apiCallQuotes = async () => {
    try {
      const response = await axios.get(QUOTES_URL);
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
        <Route path="/" element={<Home success={success} quotesData={quotesData}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={<Login success={success} setSuccess={setSuccess} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
