import theme from 'CommonStyle/themeJSX';
import styled from 'styled-components';

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
  /* box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34); */

  transition: all ${theme.animation.cubicBezier};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    background-color: ${theme.colors.primaryAccentHover};
  }
`;
