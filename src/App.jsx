import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/shop/shop";
import Navbar from "./components/Navbar";
import Details from "./components/shop/Details";
import Counter from "./components/counter/Counter"

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:name/:id" element={<Details />} />
          <Route path="/counter" element={<Counter />} />
      
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
