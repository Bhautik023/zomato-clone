import React from "react";
import logo from "../../assets/ZomatoLogo(Black).avif";
import styles from "./Header.module.css";
import SearchInput from "../searchInput/SearchInput";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className={styles.headerContainer}>
        <nav className={styles.navBar}>
          <img onClick={() => navigate('/')} className={styles.logoImg} src={logo} alt="zomato" />
          <div className={styles.searchInputContainer}>
            <SearchInput />
          </div>
          <ul className={styles.lists}>
            <li><button className={`${styles.buttonLogin} btn btn-primary`}>Log in</button></li>
            <li><button className={`${styles.buttonSignup} btn btn-primary`}>Sign up</button></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
