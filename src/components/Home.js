import { Link } from "react-router-dom";
import companyLogo from "./../assets/companyLogo.png";

const Home = () => {

  return (
    <div className="Home padding-top">
      <div className="wrapper">
        <header>
            <div className="Hero">
                <h1>YBS Galactic Tours</h1>
                <img src={companyLogo} alt="Company Logo"/>
            </div>
        </header>
          <div className="aboutContainer">
            <div className="about">
                <p>Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back and relax because we'll give you a truly out-of-this-world experience!</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;