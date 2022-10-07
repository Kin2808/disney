import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Banner() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="cta-logo-one" />
        <SignUp>
          <Link to="/home">GET ALL THERE</Link>
        </SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo-two" />
      </CTA>
    </Container>
  );
}

export default Banner;

const Container = styled.main`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
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

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CTALogoTwo = styled(CTALogoOne)``;

const SignUp = styled.div`
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1.5px;
  transition: all 250ms;
  margin: 8px 0 12px;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
