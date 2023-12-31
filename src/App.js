import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './screens/Home';
import Agenda from './screens/Agenda';
import Photos from './screens/Photos';
import Contact from './screens/Contact';
import Players from './screens/Players';
import Login from './screens/Login';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
