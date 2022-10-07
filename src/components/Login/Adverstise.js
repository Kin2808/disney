import React from "react";
import styled from "styled-components";

function Adverstise() {
  return (
    <Container>
      <ImgInfo>
        <img src="/images/cta-logo-one.svg" alt="cta-logo" />
      </ImgInfo>
      <TextInfo>
        <p>
          Get The Disney Bundle to Stream the best movies, shows, and sports
          with Disney+,HULU and ESPN+. Term Apply
        </p>
        <button>GET THIS DISNEY BUNDLE</button>
      </TextInfo>
    </Container>
  );
}

export default Adverstise;

const Container = styled.div`
  margin: 50px calc(3.5vw + 5px);
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgInfo = styled.div`
  width: 50vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextInfo = styled.div`
  text-align: center;

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
    @media screen and (max-device-width: 480px) {
      font-size: 14px;
    }
  }
`;
