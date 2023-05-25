// AvailableTourDates Component
    // Display an image with <h2>Available dates for a tour!</h2> and then an API call to show a list of say 3 dates.  These dates are returned by a second API call showing when that location is "free from any asteroid/near-earth object", because if there's asteroid it could blow up our space cruise!!
    // set the starting and end date for the tours (it only accepts 7 days, so we might have to make multiple api calls for that date range. 14 days we have to make 2 calls or something.) Who is going to be selecting the date range?? User? or the App??
    // This will have a submit button "Book a tour" which will update the state of virtualToursLeft.
    // Display a success message for the user "Congratulations! Your tour has been booked successfully."
    // Are we going to let the user book the same tour multiple times? 

    import Navigation from "./Navigation";
    import Error from "./Error";
    import { Link } from "react-router-dom";
    import React, {useEffect, useState} from "react";
    import axios from "axios";
    import Calendar from "react-calendar";
    
    const Dates = () => {
      
        const [ asteroid, setAsteroid ] = useState([]);

        useEffect( () => {
            const apiKey = '8Lvb0B5h7UkA2AojSbHeEvziOx5bwrXm9FfkQsuN';

            axios({
                url: "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=" + apiKey,
                param: {
                    key: apiKey,
                    start_date: '',
                    end_date: ''
                }
            })
            .then((result) => {
                //  console.log("Dates rendered")
                console.log(result.data)
            })
        }, [])

        // const disabledDates = [ tomorrow, in3Days, in5Days ]
        // function tileDisabled( { date, view } ){
        //     // Disable tiles in month view only
        //     if( view === 'asteroid variable') {
        //         // Check if a date React-Calender wants to check is on the list od disabled dates
        //         return disabledDates.find(dDate => isSameDay(dDate, date));
        //     }
        // }



     const [ value, setValue ] = useState(new Date());

     function onChange (nextValue) {
        setValue(nextValue);
     }

    //  give this calendar a 'tileDisabled' property. Pass a function that'll let you disable close_approach_dates: [close_approach_date_fully] and the past (before new Date())
        return (
           <section className="dates" className="padding-top" >
            <Calendar 
            onChange={onChange}
            value={value}
            // tileDisabled={tileDisabled}
             />
           </section>
        );
    }
    
    export default Dates;

// Consider installing Moment package to get current date, if new Date() isn't working?


// To support a dynamic list of disabled dates based on asteroids, move tileDisabled function to Dates function body. Use useCallback and update tileDisabled function only if necessary?
// Compare dates (isSameDay) example below:
//     import { differenceInCalendarDays } from 'date-fns';

// function isSameDay(a, b) {
//   return differenceInCalendarDays(a, b) === 0;
// }

// To check if date is within given ranges (isWithinRanges), example below:
// import { isWithinInterval } from "date-fns";

// function isWithinRange(date, range) {
//   return isWithinInterval(date, { start: range[0], end: range[1] });
// }

// function isWithinRanges(date, ranges) {
//   return ranges.some(range => isWithinRange(date, range));
// }
