import React, {useState} from 'react';
import {NavLink as Link} from 'react-router-dom';
import MenuButton from './MenuButton';
import styled from 'styled-components';

const NavLinksContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0 0 0;
`;

const LinksWrapper = styled.ul`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: #1e1e1e;
  opacity: 90%;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  color: #222;
  font-size: 34px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  transition: all 400ms ease-in-out;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #FFF;
  font-size: inherit;
`;

const MobileNav = (props) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <NavLinksContainer>

      <MenuButton isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      {isOpen && (
        <LinksWrapper><LinkItem><NavLink to='/' exact>Home</NavLink></LinkItem>
          <LinkItem><NavLink to='/cakes' exact>Cakes</NavLink></LinkItem>
          <LinkItem><NavLink to='/cupcakes' exact>Cupcakes</NavLink></LinkItem>
          <LinkItem><NavLink to='/about' exact>About</NavLink></LinkItem>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  )
}

export default MobileNav;