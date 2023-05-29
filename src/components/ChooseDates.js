import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRocket, faCalendarDays, faPerson, faUserAstronaut, } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState, useEffect } from "react";
import axios from "axios";
import format from "date-fns/format";
import { Link, useLocation} from "react-router-dom";

// Establish a prop for Header, type=list
const currentDate = new Date();
// const disabledDates = [new Date(2023, 4, 30)];

const ChooseDates = ({toursLeft, setToursLeft}) => {
    const location = useLocation();
    const { destination } = location.state;
    
    // console.log(destination, setToursLeft)
    const [ asteroid, setAsteroid ] = useState([]);
    const [ disabledDates, setDisabledDates ] = useState([]);

    useEffect( () => {
        const apiKey = '8Lvb0B5h7UkA2AojSbHeEvziOx5bwrXm9FfkQsuN';

        axios({
            url: "https://api.nasa.gov/neo/rest/v1/neo/3542519?",
            params: {
                api_key: apiKey,
                start_date: date.startDate,
                end_date: date.endDate
            }
        })
        .then((result) => {
            // console.log(result.data.close_approach_data)
            const asteroidObj = result.data.close_approach_data;
            // console.log(asteroidObj)
            const disabledDates = asteroidObj.map((data) => new Date(data.close_approach_date))
            console.log(disabledDates)
            // for (let key in asteroidObj) {
            //     const trueDates = [];
            //     const badDates = (asteroidObj[key].close_approach_date)
            //     console.log(badDates)
            //     // setAsteroid(badDates)
            //     // console.log(date.startDate)
            //     // console.log(date.endDate)

            //     // disable dates based on badDates (function tileDisabled)
                
            // }

            setDisabledDates(disabledDates)
        })
    }, [])



    // useState to hide and unhide calendar. Set to false
    const [ openDate, setOpenDate] = useState(true)
    // useState to hide and unhide bookings. Set to false
    const [ openOptions, setOpenOptions] = useState(false)

    // useState for date selection
    const [date, setDate] = useState([
        {
        startDate: new Date(), 
        endDate: new Date(),
        key: 'selection'
        }
    ]);

    // State variable to store selected dates
    // const [ selectedDates, setSelectedDates ] = useState({
    //     startDate: new Date(),
    //     endDate: new Date(),
    // })
    
    function onChange (date) {
        setDate([date.selection])
        // console.log(date.selection)
        // console.log(selectedDates)
        // console.log(date.selection)
    }

    // date.selection.startDate
    // date.selection.endDate

    
    // useState to change people and room bookings
    const [ options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    // user: [
    //     dates: {
    //         startDate: '',
    //         endDate: ''
    //         // push setDate
    //     },
    //     options: {
    //         adult: '',
    //         children: '',
    //         room: ''
    //     },
    //     tour: 0
    // ]

    // users: tours> dates+options
    
    // persist selected dates to Firebase, append to innerHTML container

//     var start = new Date().getTime()
// var end = new Date(start + 86400*1000 * 10).getTime()

// var days = [];
// for (var i = start ; i < end ; i += 86400 * 1000) {
// 	days.push(new Date(i));
// }

// Converting days into intervals (86,400 (seconds in a day) * 1000 (milliseconds) and then 10 days (an example) ). getTime() is right now
// Make a days array, and run for loop where it returns as many days fit into said loop (example 10 days)
// and then pushes this array to Firebase
// This allows us to be able to quantify the date selection, as opposed to only returning the start and end dates



    // function to run through onClick for increase and decrease buttons
    const handleOption = (name, operation) => {
        setOptions (prev=> { 
            return {
                ...prev,
                [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const confirmTour = () => {
        if (toursLeft == 0) {
            return false
        }
        setToursLeft(toursLeft-1)
    }

    // // Unavailable Dates
    // const tileDisabled = ({ activeStartDate, date, view }) => {
    //     return date < new Date()
    // }

    // console.log(asteroid)
    return (
        <div className="header padding-top">
            {/* conditional className headerContainer to switch styling based on "list" prop */}
            {/* <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}> */}
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faRocket} />
                        <span>Cruises</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faUserAstronaut} />
                        <span>Attractions</span>
                    </div>
                
                </div>
                {
                    // 
                //  type !== "list" &&
                    <>
                    {/* h1 and p should be moved to Home.js */}
                        <h1 className="headerTitle">Travel in luxury. Travel in space. Travel with YBS Galactic Tours.</h1>
                        <p className="headerDescription">With FTL travel, your destination is <b>relatively</b> in a blink of an eye.</p>
                        <button className="headerBtn">Sign in / Register</button>
                    <div className="headerSearch">
                        {/* Destination */}
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input type="text" placeholder= {destination} className="headerSearchInput"/>
                            {/* user's location choice will show up here */}
                        </div>


                        {/* Calendar */}
                        <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        {/* onClick will change state, setOpenDate will be the opposite of openDate */}
                        <span onClick={()=> setOpenDate(openDate)}  className="headerSearchText">{`${format(date[0].startDate, "yyyy/MM/dd")} to ${format(date[0].endDate, "yyyy/MM/dd")}`}</span>
                        {/* when openDate is true, display DateRange */}
                        {openDate && 
                            <DateRange
                                editableDateInputs={true}
                                // onChange={date => setDate([date.selection])}
                                onChange={onChange}
                                value={date}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={currentDate}
                                disabledDates={disabledDates}
                            />
                                }
                        </div>
                        

                    
                        {/* Person and Room bookings */}
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />

                            {/* attach event listener onClick to change value of setOpenOptions to the opposite of openOptions (ie. switching between false and true) */}
                            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>

                            {/* All Options */}
                            {/* openOptions logical AND evaluates operands and returns with the value (ie. initial falsy because setOpenOption is false in useState) */}
                            {openOptions && <div className="options">
                                {/* Adult counter */}
                            <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">

                                        {/* onClick event run function(see above), pass variable name and the increase and decrease, respectively */}
                                        <button
                                        className="optionCounterButton" onClick={()=> {handleOption("adult", "increase")}}>
                                            +
                                        </button>

                                        {/*set as {options.[name]} so that when the event listener OnClick changes the set, this number is now dynamic*/}
                                        <span className="optionCounterNumber">
                                            {options.adult}
                                        </span>

                                        <button 
                                        // disabled property to have at least 1 adult
                                        disabled= {options.adult <=1}
                                        className="optionCounterButton" onClick={()=>{handleOption("adult", "decrease")}}>
                                            -
                                        </button>
                                    </div>
                                </div>

                                {/* Children counter */}
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">

                                        <button
                                        className="optionCounterButton" onClick={()=> {handleOption("children", "increase")}}>
                                            +
                                        </button>

                                        <span className="optionCounterNumber">
                                            {options.children}
                                        </span>

                                        <button
                                        // disable property allows no less than 0 children
                                        disabled={options.children <= 0}
                                        className="optionCounterButton" onClick={()=> {handleOption("children", "decrease")}}>
                                            -
                                        </button>
                                    </div>
                                </div>

                                {/* Room counter */}
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                    
                                    <button
                                    className="optionCounterButton" onClick={()=> {handleOption("room", "increase")}}>
                                        +
                                    </button>

                                    <span className="optionCounterNumber">
                                        {options.room}
                                    </span>

                                        <button
                                        // disabled property to allow at least 1 room
                                        disabled={options.room <= 1}
                                        className="optionCounterButton" onClick={()=> {handleOption("room", "decrease")}}>
                                            -
                                        </button> 
                                    </div>
                                </div>
                            </div>}

                            <div className="headerSearchItem">
                                {/* onClick event alert when confirmed */}
                                {/* run TourLeft function to change state, from App.js. Pass through Location.js via prop drill */}
                                <button className="headerBtn" onClick={confirmTour}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default ChooseDates;