import React from "react";
import homeBackground from "../../assets/images/homeBackground.avif";
import title from "../../assets/images/titleWhite.avif";
import SearchInput from "../../components/searchInput/SearchInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Home.css";

const Home = () => {
  const fetchedLocation = useSelector(
    (state: RootState) => state.location.city
  );
  console.log(fetchedLocation)

  return (
    <div className="homeContainer">
      <img src={homeBackground} alt="background" className="background" />
      <div className="contentOverlay">
        <header>
          <div className="logo-cotainer p-3">
            <img src={title} alt="title" className="title" />
          </div>
          <div className="tagline-container pb-3">
            <h3>Discover the best food & drinks in {fetchedLocation}</h3>
          </div>
        </header>
        <SearchInput />
      </div>
    </div>
  );
};

export default Home;
