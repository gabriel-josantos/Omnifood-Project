import { Fragment } from "react";

import "../css/Hero.css";

function Hero() {
  const numArr = [1, 2, 3, 4, 5, 6];

  return (
    <Fragment>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>

            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm">
              Start eating well
            </a>
            <a href="#how" className="btn btn--outline">
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                {numArr.map((num, i) => (
                  <img
                    key={i}
                    src={`img/customers/customer-${num}.jpg`}
                    alt="Cusomer photo"
                  ></img>
                ))}
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <source srcSet="img/hero.webp" type="image/webp" />
              <source srcSet="img/hero.png" type="image/png" />
              <img
                src="img/hero.webp"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                className="hero-img"
              />
            </picture>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
