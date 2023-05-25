import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import innerPlanetsData from './../data/tours.json';
import marsImage from './../assets/image-mars.png';
import mercuryImage from './../assets/image-mercury.png';
import venusImage from './../assets/image-venus.png';
import axios from 'axios';


const Tours = () => {

  const { innerPlanets } = innerPlanetsData;
  const [activeLocation, setActiveLocation] = useState(0);
  const planetImage = {
    Mars: marsImage,
    Mercury: mercuryImage,
    Venus: venusImage
  }
  const [activeImage, setActiveImage] = useState(marsImage);

  const handleClick = (index, planet) => {
    console.log("clicked planet", index, planet);
    setActiveLocation(index);
    setActiveImage(planetImage[planet]);
  }








  const [imageOne, setImageOne] = useState([]);
  const [imageTwo, setImageTwo] = useState([]);
  const [imageThree, setImageThree] = useState([]);

  let tours = [
    "https://images-api.nasa.gov/search?q=mercury",
    "https://images-api.nasa.gov/search?q=venus",
    "https://images-api.nasa.gov/search?q=mars",
  ];

  const tourOneRequests = tours.map((url) => axios.get(url));

  async function getImages() {

    await axios.all(tourOneRequests).then(axios.spread((data1, data2, data3) => {
      const imageOne = (data1.data.collection);
      const imageTwo = (data2.data.collection);
      const imageThree = (data3.data.collection);

      setImageOne(imageOne);
      setImageTwo(imageTwo);
      setImageThree(imageThree);

    })).catch((error) => {
      console.log(error)
      console.log("this broke oops")
    })

  }
  

  useEffect(() => {
    getImages();
  }, []);


  const innerplanet = [imageOne, imageTwo, imageThree];





  
  console.log(innerplanet);








  return (
    <section className="tours wrapper padding-top">
      <h2>Pick your destination</h2>
      <div className="tours-layout">
        <h3>Inner Planets Tour</h3>
        <div className="tours-container">
          {
            innerPlanets.map((planet, index) => (

              <div key={planet.name} className="tours-item">
                <img className="tours-image" src={activeImage} alt={planet.name} />
                <div className="tours-details">
                  <ul className="tours-locations">
                    <li onClick={() => { handleClick(index, planet.name) }}>
                      {planet.name}
                    </li>
                  </ul>
                  <p className="tours-description">{index === activeLocation ? innerPlanets[activeLocation].description : ''} </p>
                </div>
              </div>
            ))}
          <Link to="/tours/locations" state={{ tourValue: 1, images: {innerplanet} }}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
      <div className="tours-layout">
        <h3>Inner Planets Tour</h3>
        <div className="tours-container">
          {
            innerPlanets.map((planet, index) => (

              <div key={planet.name} className="tours-item">
                <img className="tours-image" src={activeImage} alt={planet.name} />
                <div className="tours-details">
                  <ul className="tours-locations">
                    <li onClick={() => { handleClick(index, planet.name) }}>
                      {planet.name}
                    </li>
                  </ul>
                  <p className="tours-description">{index === activeLocation ? innerPlanets[activeLocation].description : ''} </p>
                </div>
              </div>
            ))}
          <Link to="/tours/locations" state={{ tourValue: 2, images: {innerplanet} }}>
            <button value="2">View Details</button>
          </Link>
        </div>
      </div>
      <div className="tours-layout">
        <h3>Inner Planets Tour</h3>
        <div className="tours-container">
          {
            innerPlanets.map((planet, index) => (

              <div key={planet.name} className="tours-item">
                <img className="tours-image" src={activeImage} alt={planet.name} />
                <div className="tours-details">
                  <ul className="tours-locations">
                    <li onClick={() => { handleClick(index, planet.name) }}>
                      {planet.name}
                    </li>
                  </ul>
                  <p className="tours-description">{index === activeLocation ? innerPlanets[activeLocation].description : ''} </p>
                </div>
              </div>
            ))}
          <Link to="/tours/locations" state={{ tourValue: 3, images: {innerplanet}}}>
            <button value="3">View Details</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tours;
