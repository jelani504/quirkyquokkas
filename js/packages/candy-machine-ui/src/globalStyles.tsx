import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles =  createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'HelveticaNeue-Bold';
    }
`;

export const Container = styled.div`

    z-index: 1;
    width: 100;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button<{primary: boolean, big: boolean, fontBig: boolean}>`
    border-radius: 4px;
    background: ${(({primary}) => (primary ? '#4B59F7' : '#0467FB'))};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')} ;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${(({primary}) => (primary ? '#0467FB' : '#4B59F7' ))};
    }

    @media screen and (max-width: 960px){
        width: 100%
    }
`
export default GlobalStyles;