import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./screens/Homepage";
import Cartscreen from "./screens/Cartscreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
