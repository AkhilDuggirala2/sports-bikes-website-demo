/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./blog.css";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.webp";
import Img3 from "../../assets/blog3.jpg";

const Blog = () => {
  return (
    <div id="blog">
      <div className="blog-container">
        <h1>
          <span>blog</span>me
        </h1>
      </div>
      <div className="blog-me">
        <div className="blog-image">
          <img src={Img1} alt="Blog Image" />
          <h3>Ducati MotorSports</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            velit quia! Corporis, expedita ipsam rerum quae saepe quibusdam sint
            atque eligendi, aperiam laudantium voluptates nam delectus
            repellendus, itaque debitis mollitia?
          </p>
        </div>
        <div className="blog-image">
          <img src={Img2} alt="Blog Image" />
          <h3>Ducati MotorSports</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            velit quia! Corporis, expedita ipsam rerum quae saepe quibusdam sint
            atque eligendi, aperiam laudantium voluptates nam delectus
            repellendus, itaque debitis mollitia?
          </p>
        </div>
        <div className="blog-image">
          <img src={Img3} alt="Blog Image" />
          <h3>Ducati MotorSports</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            velit quia! Corporis, expedita ipsam rerum quae saepe quibusdam sint
            atque eligendi, aperiam laudantium voluptates nam delectus
            repellendus, itaque debitis mollitia?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
