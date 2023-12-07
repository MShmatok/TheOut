import theme from 'GlobalStyle/themeJSX';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RouterLink = styled(NavLink)`
  position: relative;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
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
    border-radius: 10px;
    background-color: ${theme.colors.secondaryYellow};
    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
  &.active {
    color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
  }
  &.active:before {
    width: 100%;
  }
`;

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.primaryLight};

  padding: 14px 44px;

  outline: none;
  border: none;
  border-radius: 12px;
  background-color: ${theme.colors.primaryAccent};

  transition: all ${theme.animation.cubicBezier};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    background-color: ${theme.colors.primaryAccentHover};
  }
`;

export const ButtonCard = styled(ButtonBase)`
  width: 100%;
  padding: 12px 44px;
`;

export const ButtonLoadMore = styled(ButtonBase)`
  background-color: transparent;
  color: ${theme.colors.primaryAccent};
  color: #3470ff;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;

  &:hover {
    box-shadow: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ButtonRental = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.primaryLight};

  padding: 14px 44px;

  outline: none;
  border: none;
  border-radius: 12px;
  background-color: ${theme.colors.primaryAccent};

  transition: all ${theme.animation.cubicBezier};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    background-color: ${theme.colors.primaryAccentHover};
  }

  padding: 12px 50px;
  margin-right: auto;
`;
