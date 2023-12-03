import theme from 'CommonStyle/themeJSX';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RouterLink = styled(NavLink)`
    position: relative;
  font-size: 26px;
  line-height: 20px;
  font-weight: 600;
  color: ${theme.colors.primaryAccent};
  text-decoration: none;

  display: flex;
  align-items: center;
  &:hover {
    color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 3px;
    border-radius:10px ;
    background-color: ${theme.colors.secondaryYellow};
    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
  &.active{
     color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
  }
    &.active:before {
     width: 100%;
  }
 `;


