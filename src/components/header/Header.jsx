import React from 'react';
import { HeaderStyled } from './HeaderStyled.styled';
import { RouterLink } from 'components/Button/Button.styled';
import { Box } from '@mui/material';
import LinearIndeterminate from 'components/LoaderMui/LoaderMui';
import { selectorIsLoading } from 'redux/root/selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoading = useSelector(selectorIsLoading);

  return (
    <HeaderStyled>
      <div className="container">
        <RouterLink to={'/'}>Home</RouterLink>
        <RouterLink to={'/catalog'}>Catalog</RouterLink>
        <RouterLink to={'/favorite'}>Favorite</RouterLink>
      </div>
      <Box sx={{ height: '5px' }}>{isLoading && <LinearIndeterminate />}</Box>
    </HeaderStyled>
  );
};

export default Header;
