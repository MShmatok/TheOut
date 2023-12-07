import React from 'react';

// import bg_1x_jpg from '../../img/bg/bg_1x_jpg.jpg';
// import bg_2x_jpg from '../../img/bg/bg_2x_jpg.jpg';
// import bg_1x_web from '../../img/bg/bg_1x_web.webp';
// import bg_2x_web from '../../img/bg/bg_2x_web.webp';

// import { LinkStyled } from '../../components/header/HeaderStyled.styled';
import { SectionStyled, SectionStyledBG } from './Home.styled';

const Home = () => {
  return (
    <SectionStyledBG>
      <div className="container">
        <SectionStyled></SectionStyled>
      </div>
    </SectionStyledBG>
  );
};

export default Home;
