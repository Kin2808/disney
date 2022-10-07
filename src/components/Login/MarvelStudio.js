import React from "react";
import styled from "styled-components";

function MarvelStudio() {
  return (
    <Container>
      <Content>
        <h1>Endless Entertainment</h1>
        <p>
          Disney classics, Pixar adventures, Marvel epics, Star Wars sagas,
          National Geographic explorations, and more.
        </p>
      </Content>
    </Container>
  );
}

export default MarvelStudio;

const Container = styled.div`
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:before {
    background: url(/images/BlackPanther.jpg) center center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
    z-index: -1;
  }
`;

const Content = styled.div`
  margin: 0px calc(3.5vw + 5px);
`;
