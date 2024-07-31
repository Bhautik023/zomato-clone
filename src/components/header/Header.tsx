import React from "react";
import logo from "../../assets/ZomatoLogo(Black).avif";
import SearchInput from "../searchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="headerContainer">
        <nav className="navBar">
          <img
            onClick={() => navigate("/")}
            className="logoImg"
            src={logo}
            alt="zomato"
          />
          <div className="searchInputContainer">
            <SearchInput />
          </div>
          <ul className="lists">
            <li>
              <button className="buttonLogin btn btn-primary">Log in</button>
            </li>
            <li>
              <button className="buttonSignup btn btn-primary">Sign up</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
