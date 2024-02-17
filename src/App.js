import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Portraits from './components/Portraits';
import Pricing from './components/Pricing';
import Wedddings from './components/Weddings';
import Graduation from './components/Graduation';



function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/potraits" element={<Portraits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/weddings" element={<Wedddings />} />
          <Route path="/graduation" element={<Graduation />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
