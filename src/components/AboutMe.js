import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import LukeColor from "../img/lukeIsland.jpg";
import "./AboutMe.css";
export default function AboutMe() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p
        data-aos="slide-right"
        className="section__subtitle section__subtitle--about"
      >
        Software Engineer based in Corpus Christi, TX
      </p>

      <div className="about-me__body">
        <p>
          As a focused and creative engineer, I take a pragmatic and logical
          approach to problem-solving. I am seeking to utilize my broad
          background and education, along with excellent analytical, technical,
          and programming skills to develop applications of the future.{" "}
        </p>
      </div>

      <img src={LukeColor} alt="Luke in COLOR!" className="about-me__img" />
    </section>
  );
}
