// import theme from 'CommonStyle/themeJSX';
import styled from 'styled-components';
import hero_1440_webP from '../../img/bg/homepage_hero_1440.webp'

export const SectionStyled = styled.section`
padding: 12px 0;
width: 100%;
img{
    width: 1184px;
}
`

export const SectionStyledBG = styled.section`
background-image: url(${hero_1440_webP});

position: relative;
top: 0;
height: 100svh;
background-position: 50% 0px;

width: 100%;
background-repeat: no-repeat;
background-size: cover;

`
