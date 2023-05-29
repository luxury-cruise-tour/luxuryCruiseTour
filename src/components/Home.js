<<<<<<< HEAD
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import ChooseDates from "./ChooseDates";
import companyLogo from "./../assets/companyLogo.png";
>>>>>>> development

const Home = () => {

  const [ photo, setPhoto ] = useState([]);

  useEffect(() => {
    
    axios({
      url: "https://api.nasa.gov/planetary/apod?api_key=8Lvb0B5h7UkA2AojSbHeEvziOx5bwrXm9FfkQsuN"

    }).then((result) => {
      setPhoto(result.data)
    })
    .catch((error) => {
      console.log(error, "Error loading picture of the day")
    })
  }, [])

  return (
    <div className="Home padding-top wrapper">
      {/* <header>
          <div className="Hero">
              <h1>YBS Galactic Tours</h1>
          </div>
      </header> */}

      {/* From about is my code */}
          <p>so, you want to travel to</p>
          <h2>space,</h2>
          {/* <img className="pod-img" src={photo.url} alt={photo.title} /> */}
          <div className="about-container">
            <div className="about">
                <p>Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back and relax because we'll give you a truly out-of-this-world experience!</p>
            </div>
            <Link to="/tours">
              <div className="circle">
                <p>EXPLORE</p>
              </div>
            </Link>
          </div>
    </div>
  );
}

export default Home;