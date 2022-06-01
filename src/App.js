// Global Styles
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetail";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
      <Route path="/" element={<AboutUs />} /> 
      <Route path="/work" element={<OurWork />} /> 
      <Route path="/work/:id" element={<MovieDetails />} /> 
      <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
    </div>
  );
}

export default App;
