import React from "react";
import styled from "styled-components";
import WFLogo from "../../assets/mockup-logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  height: 15em;
  width: 17em;

  img {
    width: 100%;
    height: 100%;
    /* border-radius: 50%; */
  }
`;

// const LogoText = styled.h2`
//   font-size: 28px;
//   margin: 0 1rem;
//   color: #222;
//   font-weight: 500;
// `;

const Logo = (props) => {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={WFLogo} alt='Written in frosting logo' />
      </LogoImg>
      {/* <LogoText>Written In Frosting</LogoText> */}
    </LogoWrapper>
  );
};

export default Logo;
