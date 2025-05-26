import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productstore from './pages/Productstore';
import AboutUs from './pages/Aboutus';
import Gallery from './pages/Gallery';
import Loader from './components/Loader';
import Contanct from './pages/Contanct';
import ScrollTop from './pages/ScrollTop';
import Transportt from './pages/Transportt';


function Appcontent() {
  return (
    <div>
      <ScrollTop/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Productstore />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contanct/>}/>
        <Route path='/transport' element={<Transportt/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? <Loader /> : <Appcontent />}
    </Router>
  );
}
