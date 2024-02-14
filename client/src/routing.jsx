import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx";
import Register from "./pages/register.jsx";
import Signup from "./pages/signup.jsx";
import Signin from "./pages/signin.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Header from "./pages/header.jsx";

function Routing() {
  return(
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing
