import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Locations = () => {

    // const [imageOne, setImageOne] = useState([]);
    // const [imageTwo, setImageTwo] = useState([]);
    // const [imageThree, setImageThree] = useState([]);
  
    const location = useLocation();
    const { tourValue } = location.state;

    console.log(tourValue);


    const innerplanet = useLocation();
    const { images } = innerplanet.state;

    const image = (images.innerplanet)

    // const notablemoons = useLocation();
    // const {tour}

    
    
// gets images for first tour , replicate for tour2 and tour3
    // let tourOne = [
    //     "https://images-api.nasa.gov/search?q=mercury",
    //     "https://images-api.nasa.gov/search?q=venus",
    //     "https://images-api.nasa.gov/search?q=mars",
    // ];

    // const tourOneRequests = tourOne.map((url) => axios.get(url));


    //  useEffect(()=>{
    //     axios.all(tourOneRequests).then(axios.spread((data1,data2,data3)=>{
    //         const imageOne = (data1.data.collection);
    //         const imageTwo = (data2.data.collection);
    //         const imageThree = (data3.data.collection);

    //         setImageOne(imageOne);
    //         setImageTwo(imageTwo);
    //         setImageThree(imageThree);

    //     }))

    // },[tourOneRequests]);
    // console.log(imageOne, imageTwo, imageThree);



    // let tourTwo = [
    //     "https://images-api.nasa.gov/search?q=ganymede",
    //     "https://images-api.nasa.gov/search?q=titan",
    //     "https://images-api.nasa.gov/search?q=europa",
    // ];

    // const tourTwoRequests = tourTwo.map((url) => axios.get(url));

    // useEffect(()=>{
    //     axios.all(tourTwoRequests).then((res)=>{
    //         res.forEach((resp) => {
    //             const tourTwoImages = resp.data
    //             console.log(tourTwoImages);
    //         })
    //     })
    // },[]);

    // let tourThree = [
    //     "https://images-api.nasa.gov/search?q=pluto",
    //     "https://images-api.nasa.gov/search?q=sedna",
    //     "https://images-api.nasa.gov/search?q=eris",
    // ];

    // const tourThreeRequests = tourThree.map((url) => axios.get(url));

    // useEffect(()=>{
    //     axios.all(tourThreeRequests).then((res)=>{
    //         res.forEach((resp) => {
    //             const tourThreeImages = resp.data
    //             console.log(tourThreeImages);
    //         })
    //     })
    // },[]);


    return(
        <div className="locations padding-top">

            <h2>Locations</h2>
            <img src={image[0].items[27].links[0].href} alt={image[0].items[27].data[0].title} />
            <img src={image[1].items[7].links[0].href} alt={image[1].items[7].data[0].title} />
            <img src={image[2].items[72].links[0].href} alt={image[2].items[72].data[0].title} />
            <button> Book A Tour! </button>
        </div>
      
    )

}
export default Locations;