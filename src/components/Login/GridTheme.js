import React from "react";
import styled from "styled-components";

import img1 from "./grid-images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg";
import img2 from "./grid-images/ForkyAsksAQuestion_en-US.jpg";
import img3 from "./grid-images/moana-poster-4-2.png";
import img4 from "./grid-images/Poster_InfinityWar_EN.jpg";
import img5 from "./grid-images/Disney_MLP_GridItem_TS4_AUNZ.jpg";
import img6 from "./grid-images/Soul_EN_(1).png";
import img7 from "./grid-images/LUCA-2.png";
import img8 from "./grid-images/SW_Clone_Wars.png";
import img9 from "./grid-images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg";

function GridTheme() {
  const API_IMG = [
    { imgSrc: img1 },
    { imgSrc: img2 },
    { imgSrc: img3 },
    { imgSrc: img4 },
    { imgSrc: img5 },
    { imgSrc: img6 },
    { imgSrc: img7 },
    { imgSrc: img8 },
    { imgSrc: img9 },
  ];

  return (
    <Container>
      <Title>
        <h1>Stream Exclusive Disney+ Originals</h1>
        <p>New Stories from our incredible family of studios</p>
      </Title>
      <GridImg>
        {API_IMG &&
          API_IMG.map((item, index) => {
            return (
              <Wrap key={index}>
                <img src={item.imgSrc} alt="grid-image" />
              </Wrap>
            );
          })}
      </GridImg>
      <Btn>
        <button>Get the Disney Bundles</button>
      </Btn>
    </Container>
  );
}

export default GridTheme;

const Container = styled.div`
  margin: 50px calc(3.5vw + 5px);
`;

const Title = styled.div`
  text-align: center;
`;

const GridImg = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media screen and (max-device-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  transform: scale(1);
  transition: all 250ms;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.08);
  }

  @media screen and (max-device-width: 480px) {
    overflow:hidden;
  }
`;

const Btn = styled.div`
  text-align: center;
  margin: 25px auto;

  button {
    background-color: #0063e5;
    color: white;
    font-weight: bold;
    padding: 17px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1.5px;
    transition: all 250ms;
    margin: 8px 0 12px;
    letter-spacing: 2.5px;

    &:hover {
      background-color: #0483ee;
    }
  }
`;
