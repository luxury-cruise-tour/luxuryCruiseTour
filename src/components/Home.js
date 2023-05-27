import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import ChooseDates from "./ChooseDates";
import companyLogo from "./../assets/companyLogo.png";

const Home = () => {

    const [ photo, setPhoto ] = useState([]);

  useEffect(() => {
    const apiKey = "8Lvb0B5h7UkA2AojSbHeEvziOx5bwrXm9FfkQsuN";
    
    axios({
      url: "https://api.nasa.gov/planetary/apod?",
      params: {
        api_key: apiKey
      }
    }).then((result) => {
      setPhoto(result.data)
    })
    .catch((error) => {
      console.log(error, "Error loading picture of the day")
    })
  }, [])

  return (
    <div className="Home padding-top">
      <div className="wrapper">
        <header>
            <div className="Hero">
                <h1>YBS Galactic Tours</h1>
                <img src={companyLogo} alt="Company Logo"/>
            </div>
        </header>
        <section className="About">
            <h2>Info about YBS Galactic Tours</h2>
        </section>
        <ChooseDates />
        <section className="POD">
            <h1>{photo.title}</h1>
            <p>{photo.explanation}</p>
            <img src={photo.url} alt={photo.title} />
        </section>
        <section className="Dates">
          <h1>Available Dates!</h1>
          {/* <Link to="/dates"><Dates /></Link> */}
        </section>
        </div>
    </div>
  );
}

export default Home;