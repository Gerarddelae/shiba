import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { Tabla } from "./components/Tabla";

function App() {
  const [shiba, setShiba] = useState([]);
  const API_URL =
    "https://api.coingecko.com/api/v3/simple/price?ids=shiba-inu&vs_currencies=USD";
  const getData = async () => {
    try {
      const res = await axios.get(API_URL);
      const { usd } = res.data["shiba-inu"];
      setShiba(usd);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Tabla shiba={shiba} />
    </div>
  );
}

export default App;
