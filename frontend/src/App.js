//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <About />
      <Blog />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
