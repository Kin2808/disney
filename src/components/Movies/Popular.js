import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from "react-redux";
import { selectPopular } from "../../Redux/Reducer/MovieReducer";

function Popular() {
  const populars = useSelector(selectPopular);

  const settings = {
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <Container>
      <h4>POPULAR</h4>
      <Carousel {...settings}>
        {populars &&
          populars.map((item) => (
            <Wrap key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.CardImg} alt={item.title} />
              </Link>
            </Wrap>
          ))}
      </Carousel>
    </Container>
  );
}

export default Popular;

const Container = styled.div``;

const Carousel = styled(Slider)`
  .slick-list {
    overflow: visible;
  }
  .slick-slide {
    padding-right: 10px;
  }
  button {
    z-index: -999;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: rgb(0 0 0/80%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
  }
`;
