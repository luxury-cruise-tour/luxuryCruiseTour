import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Locations from './components/Locations';
import Home from './components/Home';
import Navigation from './components/Navigation';
// import ErrorPage from './components/ErrorPage';
import Tours from './components/Tours';
import ChooseDates from './components/ChooseDates';

function App() {

  const [toursLeft, setToursLeft] = useState(3);

  return (
    <div className="App">

      <Navigation numOfTours={toursLeft} />

      {/* Routing Config */}
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/tours/locations/dates" element={<ChooseDates />}/>
        <Route path="/tours/locations" element={<Locations />}/>
        <Route path="/tours" element={<Tours />}/>
        {/* <Route path="*" element={<ErrorPage/>}/> */}
      </Routes>

    </div>
  );
}

export default App;
