import theme from 'GlobalStyle/themeJSX';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
padding: 17px 0px;
background-color: ${theme.colors.primaryLight};
display: flex;
gap: 17px;
justify-content: flex-start;
align-items: center;
position: absolute;
top:0;
`