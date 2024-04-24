import { Link } from "react-router-dom";

const Hero = ({ title, subeheading }) => {
  return (
    <>
      <div className="heroContainer">
        <img
          className="heroImage"
          src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
          alt=""
        />
        <div className="heroContent">
          <div className="heroText">
            <h1>{title}!</h1>
            <h2>{subeheading}</h2>
          </div>
          <div className="heroButtons">
            <Link to="/Your-todos" className="heroCta">
              Go to todos
            </Link>
            <Link to="/About" className="heroCta">
              About site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
