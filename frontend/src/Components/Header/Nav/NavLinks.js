import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLinksContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0 0 0;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 55%;
  color: #222;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;

  border-bottom: 3px solid transparent;
  transition: all 400ms ease-in-out;
  padding: 0 2rem;
  
  &:hover{
    border-bottom: 3px solid #E1B1A0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const NavLinks = (props) => {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem><NavLink to='/' exact>Home</NavLink></LinkItem>
        <LinkItem><NavLink to='/cakes' exact>Cakes</NavLink></LinkItem>
        <LinkItem><NavLink to='/cupcakes' exact>Cupcakes</NavLink></LinkItem>
        <LinkItem><NavLink to='/about' exact>About</NavLink></LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  )
}

export default NavLinks;