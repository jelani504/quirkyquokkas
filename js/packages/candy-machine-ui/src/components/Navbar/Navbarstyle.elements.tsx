import { FaMagento } from 'react-icons/fa'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
    background-color: #fffc97;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 5px,  5px,  5px,  5px;
    width: 100%;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color:#000;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 3rem;
    display: flex;
    align-items: center;
    p {
        margin-top: 10px;
        font-size: 2.75rem;
        font-family: 'Luckiest Guy', helvetica;
        @media screen and (max-width: 960px){
        font-size: 2.5rem;
        text-align: center;
        width: 70%;
        }
    }
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul<{click: boolean}>`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width:100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`