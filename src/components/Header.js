import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: ${props => props.theme.palette.primaryBlue};
    color: ${props => props.theme.palette.grey4};
    text-align: center;
    padding: 4em 0em 4em 0em;
    
    ${props => props.theme.breakpoints.down("md")} {
        display: none;
    }
`

const HeaderLinks = styled.ul`
    margin: 0em;
    padding: 0em;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HeaderLink = styled.li`
    margin: 0em 2.5em;
`

const StyledLink = styled.a`
    color: #FFF;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Montserrat;
    font-size: 1.4em;
`

function Header() {
  return (
    <StyledHeader>
      <HeaderLinks>
        <HeaderLink><StyledLink href="#ourMission">Our Mission</StyledLink></HeaderLink>
        <HeaderLink><StyledLink href="#features">Features</StyledLink></HeaderLink>
        <HeaderLink><StyledLink href="#partners">Partners</StyledLink></HeaderLink>
      </HeaderLinks>
    </StyledHeader>
  );
}

export default Header;
