import { useState } from 'react';
import marsImage from './../assets/image-mars.png';

const Tours = () => {

    const [activeLocation, setActiveLocation] = useState(0);

    const tours = [
        {
          name: 'Mars',
          image: marsImage,
          description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        },
        {
          name: 'Venus',
          image: marsImage,
          description: "Embark on an otherworldly adventure to Venus, the scorching hot paradise of our solar system. Brace yourself for the extreme temperatures that can melt lead, and immerse yourself in its dense atmosphere.",
        },
        {
          name: 'Mercury',
          image: marsImage,
          description: "Prepare for an extraordinary journey to Mercury, the mysterious and elusive planet of our solar system. Experience the thrill of being the closest planet to the Sun, as you navigate through its extreme temperature variations.",
        },
      ];

    const handleClick = (index) =>{
        console.log("index:", index);
        setActiveLocation(index);
    }
    
    return (
    <section className="tours wrapper">
      <h2>Pick your destination</h2>
        <h3>Inner Planets Tour</h3>
      <div className="tours-container">
        {tours.map((tour, index) => (
          <div key={tour.name} className="tour-item">
            <img src={tour.image}/>
            <div className="tours-details">
                <ul className="tours-locations">
                    <li onClick={()=>{handleClick(index)}}>
                    {tour.name}
                    </li>
                </ul>
            <p>{index === activeLocation ? tours[activeLocation].description : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Tours;
