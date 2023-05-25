import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Locations from './components/Locations';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Error from './components/Error';
import Dates from './components/Dates';
import Tours from "./components/Tours";


function App() {

  const [toursLeft, setToursLeft] = useState(3);

  return (
    <div className="App">

      <Navigation numOfTours={toursLeft} />  

      {/* Routing Config */}
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/tours/locations" element={<Locations />}/>
        <Route path="/tours" element={<Tours />}/>
      </Routes>

    </div>
  );
}

export default App;
