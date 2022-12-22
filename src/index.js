import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';



ReactDOM.render(
<Router>
    <Header />
  <Routes>
    <Route path='/journey' element= {<App/>} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/resume' element={<Resume/> } />
    <Route path='/portfolio' element={<Portfolio/>} />

  </Routes>
    <Footer />

</Router>,

document.getElementById('root')
);




