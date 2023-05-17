import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const apiCall = async () => {
    try {
      const response = await fetch("http://localhost:8080", {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3001",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
