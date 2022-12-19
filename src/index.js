import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';




ReactDOM.render(
<Router>
  <Routes>
    <Route path='/' element= {<App/>} />
    {/* <Route path='/portfolio' element={<Portfolio />}/> */}
    <Route path='/contact' element={<Contact/>} />
    <Route path='/resume' element={<Resume/> } />

  </Routes>
    <Footer />

</Router>,

document.getElementById('root')
);




