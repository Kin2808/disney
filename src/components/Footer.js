import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <LogoFooter>
        <img src="/images/logo.svg" alt="logo" />
      </LogoFooter>
      <Nav>
        <li>English</li>
        <li>Subcriber Agreement</li>
        <li>Privacy Policy</li>
        <li>Do Not Sell My Info</li>
        <li>Children's Online Privacy Policy</li>
        <li>Closed Captioning</li>
        <li>Interest-Based-Ads</li>
        <li>Supported Devices</li>
        <li>Help</li>
        <li>Gilf Disney+</li>
        <li>About Us</li>
        <li>Disney+ Partner Program</li>
        <li>Premier Access</li>
        <li>The Disney Bundle</li>
      </Nav>
      <Copyright>©DisneyPlus-JSStack. All Rights Reserved 2021</Copyright>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  margin: 50px calc(3.5vw + 5px) 0px;
`;

const LogoFooter = styled.div`
  max-width: 200px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: initial;
  max-width: 40vw;
  text-align: center;
  margin: 0 auto;

  li {
    list-style: none;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
`;

const Copyright = styled.p`
  text-align: center;
  letter-spacing: 1.5px;
`;
