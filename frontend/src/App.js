//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <About />
      <Blog />
      <Contact />
    </main>
  );
}

export default App;
