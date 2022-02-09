import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbarstyle.elements';

const NavBar = () => {

    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
    <IconContext.Provider value = {{ color: '#fff' }}>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                <NavIcon />
                Quirky Quokkas
            </NavLogo>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                    <NavLinks to='/'>Home</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
        </>
  )
}

export default NavBar;

  