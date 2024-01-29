import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx";
import Register from "./pages/register.jsx";
import Signup from "./pages/signup.jsx";

function Routing() {
  return(
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing
