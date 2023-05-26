import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toursData from './../data/tours.json';
import marsImage from './../assets/image-mars.png';
import mercuryImage from './../assets/image-mercury.png';
import venusImage from './../assets/image-venus.png';
import ganymedeImage from './../assets/image-ganymede.png';
import titanImage from './../assets/image-titan.png';
import europaImage from './../assets/image-europa.png';
import plutoImage from './../assets/image-pluto.png';
import erisImage from './../assets/image-eris.png';
import sednaImage from './../assets/image-sedna.png';

const Tours = () => {

    const { innerPlanets, notableMoons, transNeptunian } = toursData;

    const displayedImage ={
      Mars: marsImage,
      Mercury: mercuryImage,
      Venus: venusImage,
      Ganymede: ganymedeImage,
      Titan: titanImage,
      Europa: europaImage,
      Pluto: plutoImage,
      Eris: erisImage,
      Sedna: sednaImage,
    }

    const [activeLocation, setActiveLocation] = useState(0);
    const [activeImage, setActiveImage] = useState(marsImage); 

    const [activeMoonLocation, setActiveMoonLocation] = useState(0);
    const [activeMoonImage, setActiveMoonImage] = useState(ganymedeImage);

    const [activeTransLocation, setActiveTransLocation] = useState(0);
    const [activeTransImage, setActiveTransImage] = useState(plutoImage); 

    const handleClick = (index, planet, tourNum) =>{
      if( tourNum === 1){
        console.log(index , "first one");
        setActiveLocation(index);
        setActiveImage(displayedImage[planet]);
      }else if ( tourNum === 2){
        setActiveMoonLocation(index);
        setActiveMoonImage(displayedImage[planet])
      }else{
        setActiveTransLocation(index);
        setActiveTransImage(displayedImage[planet]);
      }
    }
    
    return (

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
  const [imageFour, setImageFour] = useState([]);
  const [imageFive, setImageFive] = useState([]);
  const [imageSix, setImageSix] = useState([]);
  const [imageSeven, setImageSeven] = useState([]);
  const [imageEight, setImageEight] = useState([]);
  const [imageNine, setImageNine] = useState([]);

  let tours = [
    "https://images-api.nasa.gov/search?q=mercury",
    "https://images-api.nasa.gov/search?q=venus",
    "https://images-api.nasa.gov/search?q=mars",
    "https://images-api.nasa.gov/search?q=ganymede",
    "https://images-api.nasa.gov/search?q=titan",
    "https://images-api.nasa.gov/search?q=europa",
    "https://images-api.nasa.gov/search?q=pluto",
    "https://images-api.nasa.gov/search?q=eris",
    "https://images-api.nasa.gov/search?q=sedna",
  ];

  const tourOneRequests = tours.map((url) => axios.get(url));

  async function getImages() {

    await axios.all(tourOneRequests).then(axios.spread((data1, data2, data3, data4, data5, data6, data7, data8, data9) => {
      const imageOne = (data1.data.collection);
      const imageTwo = (data2.data.collection);
      const imageThree = (data3.data.collection);
      const imageFour = (data4.data.collection);
      const imageFive = (data5.data.collection);
      const imageSix = (data6.data.collection);
      const imageSeven = (data7.data.collection);
      const imageEight = (data8.data.collection);
      const imageNine = (data9.data.collection);

      setImageOne(imageOne);
      setImageTwo(imageTwo);
      setImageThree(imageThree);
      setImageFour(imageFour);
      setImageFive(imageFive);
      setImageSix(imageSix);
      setImageSeven(imageSeven);
      setImageEight(imageEight);
      setImageNine(imageNine);

    })).catch((error) => {
      console.log(error)
      alert("NASA API is taking a break, even computers need rest! Try again in 60 seconds")
    })
  }

  useEffect(() => {
    getImages();
  });

  const toursInfo = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight, imageNine];


  return (
    <section className="tours wrapper padding-top">
      <h2>Pick your destination</h2>
      <div className="tours-layout">
        <h3>Inner Planets Tour</h3>
          <div className="tours-container">
            {
              innerPlanets.map((planet, index) => (

                <div key={planet.name} className="tours-item">
                  <img className="tours-image" src={activeImage} alt={planet.name}/>
                  <div className="tours-details">
                    <ul className="tours-locations">
                        <li onClick={()=>{handleClick(index, planet.name, 1)}}>
                        {planet.name}
                        </li>
                    </ul>
                    <p className="tours-description">{index === activeLocation ? innerPlanets[activeLocation].description : ''} </p>
                  </div>

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
          <Link to="/tours/locations" state={{ tourValue: 1, images: { toursInfo } }}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
      <div className="tours-layout">
        <h3>Notable Moons Tour</h3>
          <div className="tours-container">
            {
              notableMoons.map((planet, index) => (

                <div key={planet.name} className="tours-item">
                  <img className="tours-image" src={activeMoonImage} alt={planet.name}/>
                  <div className="tours-details">
                    <ul className="tours-locations">
                        <li onClick={()=>{handleClick(index, planet.name, 2)}}>
                        {planet.name}
                        </li>
                    </ul>
                    <p className="tours-description">{index === activeLocation ? innerPlanets[activeMoonLocation].description : ''} </p>
                  </div>
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
          <Link to="/tours/locations" state={{ tourValue: 2, images: { toursInfo } }}>
            <button value="2">View Details</button>
          </Link>
        </div>
      </div>
      <div className="tours-layout">
        <h3>Trans-Neptunian Tour</h3>
          <div className="tours-container">
            {
              transNeptunian.map((planet, index) => (
                <div key={planet.name} className="tours-item">
                  <img className="tours-image" src={activeTransImage} alt={planet.name}/>
                  <div className="tours-details">
                    <ul className="tours-locations">
                        <li onClick={()=>{handleClick(index, planet.name, 3)}}>
                        {planet.name}
                        </li>
                    </ul>
                    <p className="tours-description">{index === activeLocation ? transNeptunian[activeTransLocation].description : ''} </p>
                  </div>
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
          <Link to="/tours/locations" state={{ tourValue: 3, images: { toursInfo } }}>
            <button value="3">View Details</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tours;
