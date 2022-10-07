import React from "react";
import styled from "styled-components";

function Stream() {
  return (
    <Container>
      <TextInfo>
        <h1>Stream with Premier Access the same day it's in theaters</h1>
        <p>
          Coming May 28. Get Premier Access to Cruella for $29.99 with a Disney+
          subscription, and watch as many times as you like before it's
          available to all Disney+ subscribers at a later date.
        </p>
        <button>PREORDER</button>
      </TextInfo>
      <ImgStream src="/images/jugle.jpg" alt="stream-images" />
    </Container>
  );
}

export default Stream;

const Container = styled.div`
  margin: 50px calc(3.5vw + 5px);
  display: flex;
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
