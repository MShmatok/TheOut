import React from 'react';

import bg_1x_jpg from '../../img/bg/bg_1x_jpg.jpg';
import bg_2x_jpg from '../../img/bg/bg_2x_jpg.jpg';
import bg_1x_webP from '../../img/bg/bg_1x_web.webp';
import bg_2x_webP from '../../img/bg/bg_2x_web.webp';

import { LinkStyled } from '../../components/header/HeaderStyled.styled';
import { SectionStyled } from './Home.styled';

const Home = () => {
  return (
    <div className="container">
      <SectionStyled>
        <picture>
          <source
            srcSet={`${bg_1x_webP} 1x, ${bg_2x_webP} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${bg_1x_jpg} 1x, ${bg_2x_jpg} 2x`}
            type="image/jpg"
          />
          <img src={bg_1x_jpg} alt="BackGround welcome page" />
        </picture>
      </SectionStyled>
    </div>
  );
};

export default Home;
