import React from "react";
import homeBackground from "../../assets/homeBackground.avif";
import title from "../../assets/Title.avif";
import styles from "./Home.module.css";
import SearchInput from "../../components/searchInput/SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Home = () => {
  const fetchedLocation = useSelector(
    (state: RootState) => state.location.city
  );

  return (
    <div className={styles.homeContainer}>
      <img
        src={homeBackground}
        alt="background"
        className={styles.background}
      />
      <div className={styles.contentOverlay}>
        <header>
          <img src={title} alt="title" className={styles.title} />
          <h3>Discover the best food & drinks in {fetchedLocation}</h3>
        </header>
        <SearchInput />
      </div>
    </div>
  );
};

export default Home;