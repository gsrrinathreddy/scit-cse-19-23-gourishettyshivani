
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
//import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
//import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/About Me" element={<AboutMe/>}/>
      <Route path="/Qualification" element={<Qualification/>}/>
      <Route path="Hobbies" element={<Hobbies/>}/>
      <Route path="/Experience" element={<Experience/>}/>
      <Route path="/Skills" element={<Skills/>}/>
   

 
    </Routes>

    </div>
  );
}

export default App;
