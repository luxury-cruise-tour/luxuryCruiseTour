import "./chooseDates.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRocket, faCalendarDays, faPerson, faUserAstronaut, } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import format from "date-fns/format";

// Establish a prop for Header, type=list
const ChooseDates = ({type}) => {

    // useState to hide and unhide calendar
    const [ openDate, setOpenDate] = useState(false)

    // useState for date selection
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);
    
    // useState to hide and unhide bookings
    const [ openOptions, setOpenOptions] = useState(false)
    
    // useState to change people and room bookings
    const [ options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    // function to run through onClick for increase and decrease buttons
    const handleOption = (name, operation) => {
        setOptions (prev=> { 
            return {
                ...prev,
                [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            };
        });
    };


    return (
        <div className="header">
            {/* conditional className headerContainer to switch styling based on "list" prop */}
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
                 type !== "list" &&
                    <>
                    {/* h1 and p should be moved to Home.js */}
                    <h1 className="headerTitle">Travel in luxury. Travel in space. Travel with YBS Galactic Tours.</h1>
                    <p className="headerDescription">With FTL travel, your destination is <b>relatively</b> in a blink of an eye.</p>
                    <button className="headerBtn">Sign in / Register</button>
                    <div className="headerSearch">

                        {/* Destination */}
                        <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
                        {/* user's location choice will show up here */}
                        </div>


                        {/* Calendar */}
                        <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        {/* onClick will change state, setOpenDate will be the opposite of openDate */}
                        <span onClick={()=> setOpenDate(!openDate)}  className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {/* when openDate is true, display DateRange */}
                        {openDate && 
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                // tileDisabled = {anything before newDate() and all asteroid API dates}
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
                                <button className="headerBtn">Confirm</button>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default ChooseDates;