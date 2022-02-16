import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbarstyle.elements';

const NavBar = () => {

    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
    <IconContext.Provider value = {{ color: '#000' }}>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                <NavIcon />
                <p>Quirky Quokkas</p>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                    <NavLinks to='/roadmap'>ROADMAP</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/collection'>COLLECTION</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/rarity'>RARITY</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/faq'>FAQ</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
        </>
  )
}

export default NavBar;

  