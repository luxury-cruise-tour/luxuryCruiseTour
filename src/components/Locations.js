import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Locations = ({toursLeft}) => {

    const location = useLocation();
    const { tourValue } = location.state;

    const innerplanet = useLocation();
    const { images } = innerplanet.state;
    const image = (images.toursInfo)

    const [isDisabled, setDisabled] = useState(false);
        
    const handleDisable = () => {
        if (toursLeft === 0){
            alert("You have reached your tour limit! Try again in 24 hours");
            setDisabled(true);
        }
    }

    if (tourValue === 1) {
        return (
            <section className="locations paddingTop wrapper">
                <h2>Mercury, Venus, and Mars Tour!</h2>
                <ul>
  					<li className="container">
                        <img src={image[0].items[27].links[0].href} alt={image[0].items[27].data[0].title} />
                        <p className="absolute">Volcanic Plains on Mercury</p>
                    </li>
                    <li className="container">
                        <img src={image[1].items[7].links[0].href} alt={image[1].items[7].data[0].title} />
                        <p className="absolute">Venus - Lada Terra Region</p>
                    </li>
                    <li className="container">
                        <img src={image[2].items[72].links[0].href} alt={image[2].items[72].data[0].title} />
                        <p className="absolute">Ground Frost on Mars</p>
                    </li>
                </ul>
                {
                    toursLeft === 0 ?
                    <button onClick={handleDisable} disabled={isDisabled}> Book This Tour! </button>
                    :
                    <Link to="/tours/locations/dates" state={{ tourValue : 1, destination : 'Mercury, Venus, and Mars' }}>
                        <button onClick={handleDisable} disabled={isDisabled}> Book This Tour! </button>
                    </Link>
                }
            </section>
        )
    } else if (tourValue === 2) {
        return (
            <section className="locations paddingTop wrapper">
                <h2>Ganymede, Titan, and Europa Tour!</h2>
                <ul>
                    <li className="container">
                        <img src={image[3].items[2].links[0].href} alt={image[3].items[2].data[0].title} />
                        <p className="absolute">Ganymede's Icy Landscapes</p>
                    </li>
                    <li className="container">
                        <img src={image[4].items[70].links[0].href} alt={image[4].items[70].data[0].title} />
                        <p className="absolute">Titan's Rough and Heavy Surface</p>
                    </li>
                    <li className="container">
                        <img src={image[5].items[9].links[0].href} alt={image[5].items[9].data[0].title} />
                        <p className="absolute">Europa's Ridges, Hills and Domes</p>
                    </li>
                </ul>
                {
                    toursLeft === 0 ? 
                    <button onClick={handleDisable} disabled={isDisabled}> Book This Tour! </button>
                    :
                    <Link to="/tours/locations/dates" state={{ tourValue : 2, destination : 'Ganymede, Titan, and Europa' }}>
                    <button onClick={handleDisable} disabled={isDisabled}> Book This Tour! </button>
                    </Link>
                }

            </section>
        )
    } else if (tourValue === 3) {
        return (
            <section className="locations paddingTop wrapper">
                <h2>Pluto, Eris and Sedna Tour!</h2>
                <ul>
                    <li className="container">
                        <img src={image[6].items[6].links[0].href} alt={image[6].items[6].data[0].title} />
                        <p className="absolute">Pluto's cold environment</p>
                    </li>
                    <li className="container">
                        <img src={image[7].items[0].links[0].href} alt={image[7].items[0].data[0].title} />
                        <p className="absolute">Eris's Strong Gravitational Pull</p>
                    </li>
                    <li className="container">
                        <img src={image[8].items[2].links[0].href} alt={image[8].items[2].data[0].title} />
                        <p className="absolute">Sedna's Atmosphere and Surface</p>
                    </li>
                </ul>
                {
                    toursLeft === 0 ? 
                    <button onClick={handleDisable} disabled={isDisabled}> Book This Tour! </button>
                    :
                    <Link to="/tours/locations/dates" state={{ tourValue : 3, destination : 'Pluto, Eris, and Sedna' }}>
                        <button onClick={handleDisable} disabled={isDisabled}> Book This Tour! </button>
                    </Link>
                }
            </section>
        )
    } else {
        return (
            alert("Something went wrong, please try reloading the page")
        )
    }
}

export default Locations;