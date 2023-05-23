import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <Home />
      <Navigation />
      <Error />
    </div>
  );
}

export default App;
