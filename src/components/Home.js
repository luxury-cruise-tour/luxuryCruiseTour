import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

const Home = () => {

    const [ photo, setPhoto ] = useState([]);

  useEffect(() => {
    const apiKey = '8Lvb0B5h7UkA2AojSbHeEvziOx5bwrXm9FfkQsuN';
    
    axios({
      url: "https://api.nasa.gov/planetary/apod?api_key=" + apiKey,
      param: {
        key: apiKey,
        media_type: "image",
        title: '',
        url: '',
        explanation: ''
      }
    }).then((result) => {
    //   console.log(result.data.title)
      setPhoto(result.data)
    })
    .catch((error) => {
      console.log(error, "Error loading picture of the day")
    })
  }, [])



  return (
    <div className="Home">
      <div className="wrapper">
        <header>
            <div className="Hero">
                <h1>YBS Galactic Tours</h1>
            </div>
        </header>
        <section className='About'>
            <h2>Info about YBS Galactic Tours</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id reiciendis asperiores deserunt totam inventore commodi hic est vel voluptatibus porro, nobis temporibus sapiente. Ipsa illum distinctio minus nesciunt est!</p>
        </section>
        <section className='POD'>
            <h1>{photo.title}</h1>
            <p>{photo.explanation}</p>
            <img src={photo.url} alt={photo.title} />
        </section>
        </div>
    </div>
  );
}

export default Home;