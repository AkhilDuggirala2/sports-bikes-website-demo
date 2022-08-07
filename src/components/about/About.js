/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../assets/me.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <h1>
          <span>about</span>me
        </h1>
      </div>
      <div className="content">
        <div className="image">
          <img src={ME} alt="About Image" className="photo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi in
          assumenda ea officiis, quae nemo iusto? Excepturi odio culpa,
          consequuntur esse harum non nemo, accusantium adipisci reprehenderit,
          modi eaque! Assumenda molestias consequatur inventore a repellendus
          non impedit. Soluta, voluptatem.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default About;
