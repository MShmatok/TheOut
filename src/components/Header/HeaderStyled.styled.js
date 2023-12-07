import theme from 'GlobalStyle/themeJSX';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  color: ${props =>
    props.$location === '/'
      ? theme.colors.primaryLight
      : theme.colors.primaryAccentHover};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  display: flex;
  gap: 17px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  padding: 17px 0px;

  & .container {
    display: flex;
    justify-content: space-between;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  h3 {
    font-size: 32px;
    margin-bottom: -2px;
  }
  p {
    font-size: 14px;
  }
`;
