//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <About />
      <Blog />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
