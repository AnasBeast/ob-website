import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './screens/Home';
import PreferedHotels from './screens/PreferedHotels';
import PreferedDestinations from './screens/PreferedDestinations';
import Hotels from './screens/Hotels';
import Hotel from './screens/Hotel';
import PreferedDestination from './screens/PreferedDestination';
import Aboutus from './screens/Aboutus';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PreferedDestinations" element={<PreferedDestinations />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Hotel/:id" element={<Hotel />} />
        <Route path="/PreferedHotels/:id" element={<PreferedHotels />} />
        <Route path="/PreferedDestination/:id" element={<PreferedDestination />} />
        <Route path='/Aboutus' element={<Aboutus/>} />
      </Routes>
    </Router>
  );
}

export default App;
