
const Tours = () => {
    return (
        <h2>Tours</h2>
    )
}

   //AvailableTours component then appears below the image with <h2>Available dates for a tour!</h2> and then an API call to show a list of say 3 dates.  These dates are returned by a second API call showing when that location is "free from any asteroid/near-earth object" (not sure of exactly what this means in relation to what the API returns).

   // Tours Component
    // Tours component will display a list of our Curated Tours:
    // List of Tours that we Offer:
    // 1) Inner planets Tour: 
    //     - Mercury
    //     - Venus 
    //     - Mars
    // 2) Notable moons Tour:
    //     -Ganymede : moon that orbits Jupiter
    //     -Titan: Saturn’s largest moon
    //     -Europa: also orbits Jupiter and has ocean and there’s potential for extraterrestrial life. 
    // 3) Trans-Neptunian Tour
    //     -Pluto
    //     -Eris: dwarf planet located in Kuiper belt.
    //     -Sedna: large and distant TNO, one of the most distant objects in the solar system. 
    //     -Haumea: dwarf planet located in Kuiper belt.
    // // Structure of Tours component might look something like this:
    // const Tours = () => {
    //      return (
    //             <div>
    //                 <h1>Tours</h1>
    //                 <TourList />
    //          </div>
    //     );
    // };

export default Tours;