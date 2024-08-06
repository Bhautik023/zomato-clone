import React from "react";
import logo from "../../assets/images/titleBlack.avif";
import SearchInput from "../searchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Button from "../button/Button";

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
              <Button className="buttonLogin btn btn-outline-secondary text-decoration-none">
                Log in
              </Button>
            </li>
            <li>
              <Button className="buttonSignup btn btn-outline-secondary text-decoration-none">
                Sign up
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
