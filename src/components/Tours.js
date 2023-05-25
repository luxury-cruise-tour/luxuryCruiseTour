import { useState } from 'react';
import innerPlanetsData from './../data/tours.json';
import marsImage from './../assets/image-mars.png';
import mercuryImage from './../assets/image-mercury.png';
import venusImage from './../assets/image-venus.png';


const Tours = () => {

    const { innerPlanets } = innerPlanetsData;
    const [activeLocation, setActiveLocation] = useState(0);
    const planetImage ={
      Mars: marsImage,
      Mercury: mercuryImage,
      Venus: venusImage
    }
    const [activeImage, setActiveImage] = useState(marsImage); 

    const handleClick = (index, planet) =>{
      console.log("clicked planet", index, planet);
      setActiveLocation(index);
      setActiveImage(planetImage[planet]);
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
                        <li onClick={()=>{handleClick(index, planet.name)}}>
                        {planet.name}
                        </li>
                    </ul>
                    <p className="tours-description">{index === activeLocation ? innerPlanets[activeLocation].description : ''} </p>
                  </div>
                </div>
              ))}
          </div>
      </div>
    </section>
    );
};

export default Tours;
