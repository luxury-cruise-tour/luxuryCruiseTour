import axios from "axios";
import { useState, useEffect } from "react";

const Locations = () => {

    

    axios({
        url: "https://images-api.nasa.gov/search",
        params: {
           q: "inner planets"
        }
    }).then((res)=>{
        console.log(res.data);
    })


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