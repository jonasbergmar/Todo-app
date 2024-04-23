import "./App.css";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Todo from "./Pages/TodoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={LandingPage()} />
        <Route path="/About" element={About()} />
        <Route path="/Projects" element={Todo()} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
