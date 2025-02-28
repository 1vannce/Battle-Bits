import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot/:name" element={<Chatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
