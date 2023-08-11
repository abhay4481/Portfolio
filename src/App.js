import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './One/Components/Header';
import Home from './One/Components/Home';
import Contact from './One/Components/Contact';
import Services from './One/Components/Services';
import Footer from "./One/Components/Footer";
import './One/Styles/App.scss'
import './One/Styles/Header.scss'
import './One/Styles/Home.scss'
import './One/Styles/Footer.scss'
import './One/Styles/Contact.scss'
import './One/Styles/MediaQuery.scss'


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
