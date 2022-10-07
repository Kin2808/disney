import React from "react";
import styled from "styled-components";

function Devices() {
  return (
    <Container>
      <h1>Available Stream on Your Favorite Devices</h1>
      <Grid>
        <Wrap>
          <img src="/images/TV.png" alt="TV" />
          <p>TV</p>
        </Wrap>
        <Wrap>
          <img src="/images/Laptop.png" alt="laptop" />
          <p>Laptop</p>
        </Wrap>
        <Wrap>
          <img src="/images/mobile.png" alt="mobile" />
          <p>Mobile</p>
        </Wrap>
        <Wrap>
          <img src="/images/XBOX.png" alt="xbox" />
          <p>XBOX</p>
        </Wrap>
      </Grid>
    </Container>
  );
}

export default Devices;

const Container = styled.div`
  margin: 50px calc(3.5vw + 5px);
  padding: 0px 300px;
  h1 {
    text-align: center;
  }
  @media screen and (max-device-width: 480px) {
    padding: 0px;
    h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
    padding: 0px;
  }
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Wrap = styled.div`
  max-width: 100%;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;
