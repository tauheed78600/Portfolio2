import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/projects' element = {<About/>} />
        <Route path='/education' element = {<About/>} />
        <Route path='/experience' element = {<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
