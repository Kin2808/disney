import React from "react";
import styled from "styled-components";

function DownloadNow() {
  return (
    <Container>
      <TextInfo>
        <h1>Stream Now or Download Now</h1>
        <h1>Explore US More on Disney</h1>
        <p>
          Stream on 4 Devices at Once or Download Your Favorites to Watch Later.
          With dozens of titles i stunning 4K UHD, you can watch the way you
          always wished.
        </p>
        <button>DOWNLOAD NOW</button>
      </TextInfo>
      <ImgStream src="/images/devices.png" alt="stream-images" />
    </Container>
  );
}

export default DownloadNow;

const Container = styled.div`
  margin: 50px calc(3.5vw + 5px);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-device-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const TextInfo = styled.div`
  max-width: 600px;
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
  @media screen and (max-device-width: 480px) {
    font-size: 0.8rem;
    overflow: hidden;
    h1 {
      font-size: 1rem;
    }
    button {
      font-size: 10px;
      padding: 7px;
    }
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
    margin-left: 40px;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const ImgStream = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 40%;
  opacity: 0.8;
  @media screen and (max-device-width: 480px) {
    height: 70%;
    max-width: none;
  }
`;
