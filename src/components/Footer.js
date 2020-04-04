import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: ${props => props.theme.palette.primaryBlue};
    color: ${props => props.theme.palette.grey4};
    text-align: center;
    font-size: 1.2em;
    padding: 4.5em 0em;
    font-weight: 600;
`

function Footer() {
  return (
    <StyledFooter>&copy; 2020 Flaat. Powered by EQ Works Ltd.</StyledFooter>
  );
}

export default Footer;
