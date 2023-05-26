import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Locations = () => {

    const location = useLocation();
    const { tourValue } = location.state;
    const innerplanet = useLocation();
    const { images } = innerplanet.state;

    const image = (images.toursInfo)

    if (tourValue === 1) {
        return (
            <div className="locations padding-top">
                <h2>Mercury, Venus, and Mars Tour!</h2>
                <img src={image[0].items[27].links[0].href} alt={image[0].items[27].data[0].title} />
                <img src={image[1].items[7].links[0].href} alt={image[1].items[7].data[0].title} />
                <img src={image[2].items[72].links[0].href} alt={image[2].items[72].data[0].title} />
                <button> Book This Tour! </button>
            </div>
        )
    } else if (tourValue === 2) {
        return (
            <div className="locations padding-top">
                <h2>Ganymede, Titan, and Europa Tour!</h2>
                <img src={image[3].items[2].links[0].href} alt={image[3].items[2].data[0].title} />
                <img src={image[4].items[70].links[0].href} alt={image[4].items[70].data[0].title} />
                <img src={image[5].items[9].links[0].href} alt={image[5].items[9].data[0].title} />
                <button> Book This Tour! </button>
            </div>
        )
    } else if (tourValue === 3) {
        return (
            <div className="locations padding-top">
                <h2>Pluto, Eris and Sedna Tour!</h2>
                <img src={image[6].items[6].links[0].href} alt={image[6].items[6].data[0].title} />
                <img src={image[7].items[0].links[0].href} alt={image[7].items[0].data[0].title} />
                <img src={image[8].items[2].links[0].href} alt={image[8].items[2].data[0].title} />
                <button> Book This Tour! </button>
            </div>
        )
    } else {
        return (
            alert("Something went wrong, please try reloading the page")
        )
    }
}

export default Locations;