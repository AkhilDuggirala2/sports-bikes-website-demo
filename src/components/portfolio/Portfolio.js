/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/background1.jpg";
import Image2 from "../../assets/background2.jpg";
import Image3 from "../../assets/background3.jpg";
import Image4 from "../../assets/background4.png";
import Image5 from "../../assets/background5.jpg";
import Image6 from "../../assets/background6.jpg";

import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Ducati Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 2,
    image: Image2,
    title: "KTM Duke 390",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 3,
    image: Image3,
    title: "KTM Duke RC 390",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 4,
    image: Image4,
    title: "Kawasaki Ninja 400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 5,
    image: Image5,
    title: "Yamaha YZF-R1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 6,
    image: Image6,
    title: "BMW S1000 RR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <h1>
          <span>portfolio</span>me
        </h1>
      </div>
      <Swiper
        className="portfolio-item"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide key={id} className="portfolio-content">
              <div className="portfolio-image">
                <img src={image} alt="Portfolio Image" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
