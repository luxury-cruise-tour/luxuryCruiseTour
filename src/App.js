import './App.css';
import Locations from './components/Locations';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Error from './components/Error';
//test

function App() {
  return (
    <div className="App">
      <Navigation />  
      <Home />
      <Locations />
      <Error />
    </div>
  );
}

export default App;
