
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Cart from "./Cart";
import Home from "./Home";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
