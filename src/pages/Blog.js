import React from "react";
import "./blog.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogImg1 from "../images/blog_image_1.svg";
import blogImg2 from "../images/bloco_image_2.svg";
import blogImg3 from "../images/bloco_image_3.svg";
import blogImg4 from "../images/bloco_image_4.svg";
import face1 from "../images/faces/face1.jpg";
import face2 from "../images/faces/face2.jpg";
import face3 from "../images/faces/face3.jpg";
import face4 from "../images/faces/face4.jpg";


const data = [
  {
    imageBlog: blogImg1,
    text: "Quick-start guide to nuts and seeds",
    imageFace: face1,
    name: "Kevin Ibrahim",
  },
  {
    imageBlog: blogImg2,
    text: "Nutrition: Tips for Improving Your Health",
    imageFace: face2,
    name: "Mike Jackson",
  },
  {
    imageBlog: blogImg3,
    text: "The top 10 benefits of eating healthy",
    imageFace: face3,
    name: "Bryan McGregor",
  },
  {
    imageBlog: blogImg4,
    text: "What M anything Healthy",
    imageFace: face4,
    name: "Jash Anything",
  },
];

export default function Blog() {
  const settings = {
    dots: false,
    centerMode:true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 500,
          autoplay: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="containerBlogs" id="blog">
      <h1>Read Our Blog</h1>
      <div className="decBlogs">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </div>

      <Slider {...settings} className="slider">
        {data.map((b, i) => {
          return (
            <div key={i}>
              <div className="cardsBlogs" >
                <div className="cardBlogContainer" >
                  <img src={b.imageBlog} alt={b.text} />
                  <div className="innerCardBlog">
                    <h2>{b.text}</h2>
                    <div className="personBlog">
                      <img src={b.imageFace} alt={b.name} />
                      <p>{b.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
