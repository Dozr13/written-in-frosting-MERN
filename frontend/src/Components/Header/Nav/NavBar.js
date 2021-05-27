import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { ScreenSize } from "../../responsive/index";
import { useMediaQuery } from "react-responsive";

const NavContainer = styled.div`
  width: 100%;
  height: 38vh;
  background-image: linear-gradient(to bottom, transparent 0%, #e8d3d0 100%);
  box-shadow: 0 1px 3px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin: 0;
`;

const LogoSection = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 3px double #000; */
  margin: 0;
`;

const LinkSection = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  z-index: 11;
`;

const SubSection = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  position: absolute;
  top: 30px;
  right: 0;
`;

const NavBar = (props) => {
  const isMobile = useMediaQuery({ maxWidth: ScreenSize.mobile });

  return (
    <NavContainer>
      <LogoSection>
        <Logo />
      </LogoSection>
      <LinkSection>{!isMobile && <NavLinks />}</LinkSection>
      <SubSection>{isMobile && <MobileNav />}</SubSection>
    </NavContainer>
  );
};

export default NavBar;
