import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './screens/Home';
import Agenda from './screens/Agenda';
import Photos from './screens/Photos';
import Contact from './screens/Contact';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
