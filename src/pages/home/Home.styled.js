import theme from 'GlobalStyle/themeJSX';
import styled from 'styled-components';

import hero_1440_webP from '../../img/bg/homepage_hero_1440.webp';

export const SectionStyled = styled.section`
  background-image: url(${hero_1440_webP});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0px;

  height: 100svh;
  width: 100%;

  h1 {
    position: absolute;
    bottom: 150px;
    margin-top: auto;
    color: ${theme.colors.primaryLight};
    font-size: 75px;
  }
`;
