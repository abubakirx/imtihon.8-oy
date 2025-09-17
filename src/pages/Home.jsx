import React from "react";
import CookSmarter from "../components/SmartCook";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h2 className="hero__title">
            <span className="highlight">Healthy</span> meals, zero fuss
          </h2>
          <p className="hero__desc">
            Discover eight quick, whole-food recipes that you can cook tonight.
          </p>
          <div className="hero__container">
            <Link to="/recipes" className="btn start__btn">Start exploring</Link>
            <img
              className="hero__image"
              src="./assets/images/image-home-hero-large.webp"
              alt=""
              width={1192}
              height={530}
            />
          </div>
        </div>
      </section>

      <section className="container">
        <h3 className="built__title">Built for real life</h3>
        <p>Cooking shouldn’t be complicated. These recipes are quick and tasty.</p>
      </section>

      <div className="container">
        <CookSmarter />
      </div>
    </>
  );
}

export default Home;
