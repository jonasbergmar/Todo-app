import "./App.css";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import TodoPage from "./Pages/TodoPage";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer footerTitle={"Footer"} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Your-todos" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
