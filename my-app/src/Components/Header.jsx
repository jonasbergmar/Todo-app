import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerBtn = ({ handleClick, isClicked }) => {
  return (
    <div className="burgerContainer" onClick={handleClick}>
      {isClicked ? (
        <i className="fas fa-x"></i>
      ) : (
        <i className="fas fa-burger"></i>
      )}
    </div>
  );
};

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="header">
        <div className="navContainer">
          <Link to="/">LOGO</Link>
          <div className="buttonsContainer">
            <BurgerBtn handleClick={toggleClick} isClicked={isClicked} />
          </div>
        </div>
        <div className={isClicked ? "linkContainer show" : "linkContainer"}>
          <Link
            className={activeLink === "/" ? "navLink active" : "navLink"}
            to="/"
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            className={
              activeLink === "/Your-todos" ? "navLink active" : "navLink"
            }
            to="/Your-todos"
            onClick={() => handleLinkClick("/Your-todos")}
          >
            Your Todos
          </Link>
          <Link
            className={activeLink === "/About" ? "navLink active" : "navLink"}
            to="/About"
            onClick={() => handleLinkClick("/About")}
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
