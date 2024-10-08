import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/projects' element = {<Projects/>} />
        <Route path='/education' element = {<Education/>} />
        <Route path='/experience' element = {<Experience/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path = "/resume" element = {<Resume/>} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
