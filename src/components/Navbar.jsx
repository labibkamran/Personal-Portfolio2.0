import React from 'react'
import { Link as LinkR} from 'react-router-dom';
import styled from 'styled-components'


const NavbarContainer = styled.div``;
const Navlogo = styled(LinkR);
const Navbar = () => {
  return (
    <NavbarContainer>
        <Navlogo>
            <a>Geeks for greeks</a>
        </Navlogo>
    </NavbarContainer>
  )
}

export default Navbar