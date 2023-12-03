import React from 'react';
import { HeaderStyled, LinkStyled, Wrapper } from './HeaderStyled.styled';
import { RouterLink } from 'components/button/button.styled';

const Header = () => {
  return (
    <div className="container">
      <HeaderStyled>
        <RouterLink to={'/'}>Home</RouterLink>
        <RouterLink to={'/catalog'}>Catalog</RouterLink>
        <RouterLink to={'/favorite'}>Favorite</RouterLink>
      </HeaderStyled>
    </div>
  );
};

export default Header;
