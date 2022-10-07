import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <video autoPlay muted loop playsInline>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-disney.png" alt="viewers-disney" />
      </Wrap>
      <Wrap>
        <video autoPlay muted loop playsInline>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-marvel.png" alt="viewers-marvel" />
      </Wrap>
      <Wrap>
        <video autoPlay muted loop playsInline>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
        <img src="images/viewers-national.png" alt="viewers-national" />
      </Wrap>
      <Wrap>
        <video autoPlay muted loop playsInline>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-pixar.png" alt="viewers-pixar" />
      </Wrap>
      <Wrap>
        <video autoPlay muted loop playsInline>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-starwars.png" alt="viewers-starwars" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 25px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media screen and (max-device-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  position: relative;

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    z-index: -1;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.09);
    box-shadow: rgb(0 0 0/80%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    video {
      opacity: 1;
    }
  }
  @media screen and (max-device-width: 480px) {
    overflow: hidden;
  }
`;
