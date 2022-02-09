import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles =  createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', san-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export default GlobalStyles;