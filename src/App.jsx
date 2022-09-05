import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {createContext, useState, useEffect} from "react";
import axios from "axios";
import {ToastContainer} from "react-toastify";
import Header from "./components/Header";
import Details from "./views/Details";
import Home from "./views/Home";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

export const AllContexts = createContext();

function App() {
  const [countries, setCountries] = useState("loading");
  const [displayedData, setDisplayedData] = useState("loading");

  useEffect(() => {
    (async () => {
      const {data} = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data);
    })();
  }, []);

  return (
    <Router>
      <div className="min-h-screen layout flex flex-col ">
        <AllContexts.Provider
          value={{countries, displayedData, setCountries, setDisplayedData}}
        >
          <Header />
          <main className="main relative py-16 px-4 grow container mx-auto grid items-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:country_name" element={<Details />} />
            </Routes>
          </main>
        </AllContexts.Provider>
      </div>
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
