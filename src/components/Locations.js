import axios from "axios";
import { useEffect } from "react";

const Locations = () => {

// gets images for first tour , replicate for tour2 and tour3
    let tourOne = [
        "https://images-api.nasa.gov/search?q=mercury",
        "https://images-api.nasa.gov/search?q=venus",
        "https://images-api.nasa.gov/search?q=mars"
    ];

    const requests = tourOne.map((url) => axios.get(url));

    useEffect(()=>{
        axios.all(requests).then((res)=>{
            res.forEach((resp) => {
                let images = {
                  image: resp.data
                }
                console.log(images);
            })
        })
    },[requests]);
   


    


    return(
        <div className="locations">
            <h2>Locations</h2>
            <img src="http://placekitten.com/500/210" alt="" />
            <img src="http://placekitten.com/500/210" alt="" />
            <img src="http://placekitten.com/500/210" alt="" />
            <button> Book A Tour! </button>
        </div>
      
    )
}
export default Locations;