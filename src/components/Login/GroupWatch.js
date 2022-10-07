import React from "react";
import styled from "styled-components";

function GroupWatch() {
  return (
    <Container>
      <Content>
        <h1>Virtual Movie Nights with GroupWatch</h1>
        <li>Watch together, even when apart</li>
        <li>Stream with up to 6 friends</li>
        <li>Pause, rewind, react together</li>
        <li>Easy setup and Sharing</li>
      </Content>
    </Container>
  );
}

export default GroupWatch;

const Container = styled.div`
  height: 90vh;
  position: relative;
  &:before {
    background: url("/images/Soul_Groupwatch.jpg") center center / cover
      no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  margin: 17vh calc(3.5vw + 5px);
  line-height: 2.5;
  @media screen and (max-device-width: 480px) {
    h1 {
      font-size: 1rem;
    }
    li {
      font-size: 0.8rem;
    }
  }
`;
