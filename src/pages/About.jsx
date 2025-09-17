import React from "react";
import CookSmarter from "../components/SmartCook";

function About() {
  return (
    <>
      <section className="container built__container">
        <div>
          <p className="mission__our">Our mission</p>
          <h3 className="built__title">
            Help more people cook nourishing meals, more often.
          </h3>
          <p className="built__desc__more">
            Healthy Recipe Finder proves that healthy eating can be convenient, affordable, and delicious.
          </p>
          <p className="built__desc">
            We showcase quick, whole-food dishes anyone can master—honest ingredients and clear steps.
          </p>
        </div>
        <img
          className="built__image"
          src="./assets/images/image-about-our-mission-large.webp"
          alt="About our mission"
        />
      </section>

      <section className="container exist__container">
        <h2 className="exist__title">Why we exist</h2>
        <ul className="exist__list">
          <li className="exist__item">
            <h4 className="exist__item-title">Cut through the noise.</h4>
            <p className="exist__item-desc">
              Internet has tons of recipes; we curate fool-proof dishes to save your time.
            </p>
          </li>
          <li className="exist__item">
            <h4 className="exist__item-title">Empower home kitchens.</h4>
            <p className="exist__item-desc">
              Control ingredients, control your meals. Recipes are simple and quick.
            </p>
          </li>
          <li className="exist__item">
            <h4 className="exist__item-title">Make healthy look good.</h4>
            <p className="exist__item-desc">
              High-res imagery shows what success looks like—confidence matters.
            </p>
          </li>
        </ul>
      </section>

      <div className="container">
        <CookSmarter />
      </div>
    </>
  );
}

export default About;
