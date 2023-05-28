import engineerImg from './../assets/image-engineer.png';

const ErrorPage = () =>{
    return(
        <div className="errorPage-container">
            <h2>404 PAGE NOT FOUND</h2>
            <p>Oops! It seems like the page you're looking for is lost in space.</p>
            <p>Don't worry, our engineers are on the mission to find it!</p>
            <img src={engineerImg} alt="Loading screen with floating astronaut"/>
        </div>
    )
}

export default ErrorPage;