import { useState } from 'react';
import { Link } from 'react-router-dom';
import toursData from './../data/tours.json';
import marsImage from './../assets/image-mars.png';
import mercuryImage from './../assets/image-mercury.png';
import venusImage from './../assets/image-venus.png';
import ganymedeImage from './../assets/image-ganymede.png';
import titanImage from './../assets/image-titan.png';

const Tours = () => {

    const { innerPlanets, notableMoons, transNeptunian } = toursData;

    const displayedImage ={
      Mars: marsImage,
      Mercury: mercuryImage,
      Venus: venusImage,
      Ganymede: ganymedeImage,
      Titan: titanImage,
      // Europa: ,
      // Pluto: ,
      // Eris: ,
      // Sedna: ,
    }
    const [activeLocation, setActiveLocation] = useState(0);
    const [activeImage, setActiveImage] = useState(marsImage); 

    const [activeMoonLocation, setActiveMoonLocation] = useState(0);
    const [activeMoonImage, setActiveMoonImage] = useState(ganymedeImage);

    const handleClick = (index, planet, tourNum) =>{
      if( tourNum === 1){
        console.log(index , "first one");
        setActiveLocation(index);
        setActiveImage(displayedImage[planet]);
      }else if ( tourNum === 2){
        setActiveMoonLocation(index);
        setActiveMoonImage(displayedImage[planet])
      }
    }
    
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
                </div>
              ))}
              <Link to="/locations" state={{ tourValue : 1 }}>
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
                </div>
              ))}
            <Link to="/locations" state={{ tourValue : 2 }}>
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
                  <img className="tours-image" src={activeImage} alt={planet.name}/>
                  <div className="tours-details">
                    <ul className="tours-locations">
                        <li onClick={()=>{handleClick(index, planet.name, 3)}}>
                        {planet.name}
                        </li>
                    </ul>
                    <p className="tours-description">{index === activeLocation ? innerPlanets[activeLocation].description : ''} </p>
                  </div>
                </div>
              ))}
            <Link to="/locations" state={{ tourValue : 3 }}>
              <button value="3">View Details</button>
            </Link>
          </div>
      </div>
    </section>
    );
};

export default Tours;
