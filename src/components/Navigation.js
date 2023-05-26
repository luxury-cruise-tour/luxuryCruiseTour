import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navigation = ({numOfTours}) =>{

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleClick = () =>{
        setMenuIsOpen(!menuIsOpen);
        console.log("yoyo")
    }

    return(
        <>
            <div className={`navigation-overlay ${menuIsOpen ? "show" : ""}`}></div>
            <nav className="navigation">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                </div>
                <div className="hamburger-icon">
                    <svg className={ !menuIsOpen ? "" : "hide"} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="48" height="48" fill="#f4e6e8"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    <svg className={ menuIsOpen ? "" : "hide"} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  width="48" height="48" fill="#f4e6e8"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                </div>
                <ul>
                    <li className="links">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="links">
                        <Link to="/tours">Tours</Link>
                    </li>
                    <li>
                        <p>You have <span>{numOfTours}</span> virtual tours left today!</p>
                    </li>
                </ul>
                <div className={`mobile-menu ${ menuIsOpen? "show" : "" }`}>
                    <div className="links" onClick={handleClick}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className="links" onClick={handleClick}>
                        <Link to="/tours">Tours</Link>
                    </div>
                    <div>
                        <p>You have <span>{numOfTours}</span> virtual tours left today!</p>
                    </div>
                </div>
            </nav>
        </>

    )

}

export default Navigation;
