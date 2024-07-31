import React from "react";
import homeBackground from "../../assets/homeBackground.avif";
import title from "../../assets/Title.avif";
import SearchInput from "../../components/searchInput/SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./Home.module.css";

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
          <div>
            <img src={title} alt="title" className={styles.title} />
          </div>
          <div>
            <h3>Discover the best food & drinks in {fetchedLocation}</h3>
          </div>
        </header>
        <SearchInput />
      </div>
    </div>
  );
};

export default Home;
