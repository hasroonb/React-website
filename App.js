// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Nopage from "./components/Nopage";
import Navbar from './components/Navbar';
import About from './components/About';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path='/home' element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} /> 
        <Route path="about" element={<About />} />
        <Route path="Nopage" element={<Nopage />} />
        <Route path="SignUp" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
