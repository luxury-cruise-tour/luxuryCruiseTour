import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () =>{

    // Tours component is going to have access to this state. 
    const [toursLeft, setToursLeft] = useState(3);

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tours">Tours</Link>
                </li>
            </ul>
            <p>You have {toursLeft} virtual tours left today!</p>
        </nav>
    )

}

export default Navigation;
