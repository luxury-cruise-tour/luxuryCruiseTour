
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import Home from './components/Home';
import Location from './components/Location';
import Tours from './components/Tours';

function App() {
  return (
    <div>

      {/* PSEUDOCODE */}

      {/* //Nav component shows the NASA logo and a title, say "Intergalactic Tours."  It includes an area that dynamically updates the number of tours still permitted for a user, i.e. "Please select a tour!  You're welcome to enjoy up to <p>{numberOfToursLeft}</p> tours today."

    //Main component shows three beautiful images, each one from one of the 3 locations we've chosen, all of which are clickable for the user.  We could even use static images for this in the MVP to avoid having to call the API so soon.

    //Location component renders after one of the images on Main has been clicked, and calls the API to display a dynamic image for that location.

    //AvailableTours component then appears below the image with <h2>Available dates for a tour!</h2> and then an API call to show a list of say 3 dates.  These dates are returned by a second API call showing when that location is "free from any asteroid/near-earth object" (not sure of exactly what this means in relation to what the API returns).

    //ErrorMessage component should exist, but unclear to me what errors the MVP could yield when it's this simple

    //Still not sure what "API loading states" are - is this a loading screen meant to show while the APIs work? */}

    </div> 
      );
}

      export default App;
