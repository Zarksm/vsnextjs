"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderHero } from "@/lib/constant";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {SliderHero.map((item) => (
        <div
          className="text-center py-20 md:px-20 md:py-40 dark:text-white font-Quisand flex"
          key={item.id}
        >
          <p className="md:text-3xl">{item.text}</p>
          <p className="md:text-xl mt-5">{`" ${item.habib} "`}</p>
        </div>
      ))}
    </Slider>
  );
}
