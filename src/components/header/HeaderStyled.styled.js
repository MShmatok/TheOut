import theme from 'GlobalStyle/themeJSX';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
position: absolute;
top:0;
left: 50%;
transform: translateX(-50%);
width: 100%;

display: flex;
gap: 17px;
justify-content: flex-start;
align-items: center;

padding: 17px 0px;
/* background-color: ${theme.colors.primaryLight}; */

` 