import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRocket, faCalendarDays, faUserAstronaut, } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState, useEffect } from "react";
import format from "date-fns/format";
import { useLocation} from "react-router-dom";

const currentDate = new Date();
const apiKey = '8Lvb0B5h7UkA2AojSbHeEvziOx5bwrXm9FfkQsuN';

const ChooseDates = ({toursLeft, setToursLeft}) => {

    const location = useLocation();
    const { destination } = location.state;
    const [ disabledDates, setDisabledDates ] = useState([]);

    useEffect( () => {
        axios({
            url: "https://api.nasa.gov/neo/rest/v1/neo/3542519?",
            params: {
                api_key: apiKey,
            }
        })
        .then((result) => {
            const asteroidObj = result.data.close_approach_data;
            const disabledDates = asteroidObj.map((data) => new Date(data.close_approach_date))

            setDisabledDates(disabledDates)
        })
    }, [])

    const [ openDate, setOpenDate] = useState(true)
    const [ openOptions, setOpenOptions] = useState(true)

    const [date, setDate] = useState([
        {
        startDate: new Date(), 
        endDate: new Date(),
        key: "selection"
        }
    ]);

    function onChange (date) {
        setDate([date.selection])   
    }

    const [ options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions (prev=> { 
            return {
                ...prev,
                [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const confirmTour = () => {
        if (toursLeft === 0) {
            // return false
            const message = `It appears you've met your daily limit!`

            alert(message)
        } else {
        setToursLeft(toursLeft-1)
        const departure = format(date[0].startDate, "MMMM dd, yyyy");
        const arrival = format(date[0].endDate, "MMMM dd, yyyy");

        const confirmation = `Congratulations! Your tour to ${destination} has been booked! We will have ${options.room} room(s) available for ${options.adult} adult(s) and ${options.children} children. You will be leaving on ${departure} and returning on ${arrival}. Bon Voyage!`

        alert(confirmation)
        }
    }

    return (
        <div className="header paddingTop">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span className="iconPadding">Stays</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faRocket} />
                        <span className="iconPadding">Cruises</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faUserAstronaut} />
                        <span className="iconPadding">Attractions</span>
                    </div>
                
                </div>
                <div>
                    <h2 className="headerTitle">Travel in luxury. Travel in space. Travel with YBS Galactic Tours.</h2>
                    <p className="headerDescription">With FTL travel, your destination is <span>relatively</span> in a blink of an eye.</p>
                    <section>
                    <div className="headerSearch">
                        {/* Destination */}
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faRocket} className="headerIcon" />
                            <input readOnly type="text" placeholder= {destination} className="headerSearchInput"/>
                        </div>
                        {/* Calendar */}
                        <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=> setOpenDate(!openDate)}  className="headerSearchText">{`${format(date[0].startDate, "yyyy/MM/dd")} to ${format(date[0].endDate, "yyyy/MM/dd")}`}</span>
                        {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={onChange}
                                value={date}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={currentDate}
                                disabledDates={disabledDates}
                            />}
                        </div>
                        {/* Person and Room bookings */}
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                            {/* All Options */}
                            {openOptions && <div className="options">
                                {/* Adult counter */}
                            <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">

                                        <button
                                        disabled={(options.adult + options.children)/6 >= options.room}
                                        className="optionCounterButton" onClick={()=> {handleOption("adult", "increase")}}>
                                            +
                                        </button>

                                        <span className="optionCounterNumber">
                                            {options.adult}
                                        </span>

                                        <button 
                                        disabled= {options.adult <=1}
                                        className="optionCounterButton" onClick={()=>{handleOption("adult", "decrease")}}>
                                            -
                                        </button>
                                    </div>
                                </div>

                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">

                                        <button
                                        disabled={(options.adult + options.children)/6 >= options.room}
                                        className="optionCounterButton" onClick={()=> {handleOption("children", "increase")}}>
                                            +
                                        </button>

                                        <span className="optionCounterNumber">
                                            {options.children}
                                        </span>

                                        <button
                                        disabled={options.children <= 0}
                                        className="optionCounterButton" onClick={()=> {handleOption("children", "decrease")}}>
                                            -
                                        </button>
                                    </div>
                                </div>

                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                    
                                    <button
                                    disabled={options.room >= 20}
                                    className="optionCounterButton" onClick={()=> {handleOption("room", "increase")}}>
                                        +
                                    </button>

                                    <span className="optionCounterNumber">
                                        {options.room}
                                    </span>
                                    
                                        <button
                                        disabled={(options.adult + options.children)/6  > (options.room - 1)}
                                        className="optionCounterButton" onClick={()=> {handleOption("room", "decrease")}}>
                                            -
                                        </button> 
                                    </div>
                                </div>
                            </div>}

                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={confirmTour}>Confirm</button>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default ChooseDates;