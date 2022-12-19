import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Portfolio from './components/portfolio';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      {/* <Portfolio /> */}
      <Contact />
      <Resume />


    </div>
  );
}

export default App;
