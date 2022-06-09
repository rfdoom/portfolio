//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Header from './components/header/Header.jsx';
import Skills from './components/skills/Skills.jsx';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
