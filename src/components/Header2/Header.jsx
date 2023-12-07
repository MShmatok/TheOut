import React from 'react';
import { HeaderStyled, Logo, Navigation } from './HeaderStyled.styled';
import { RouterLink } from 'components/Button2/Button.styled';
import { Box } from '@mui/material';
import LinearIndeterminate from 'components/LoaderMui2/LoaderMui';
import { selectorIsLoading } from 'redux/root/selectors';
import { useSelector } from 'react-redux';
import Container from 'components/Container/Container';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const isLoading = useSelector(selectorIsLoading);
  const location = useLocation();

  return (
    <HeaderStyled $location={location.pathname}>
      <Container>
        <Logo to="/">
          <h3>THE OUT</h3>
          <p>to your world today</p>
        </Logo>
        <Navigation>
          <RouterLink to={'/'}>HOME</RouterLink>
          <RouterLink to={'/catalog'}>OUR CARS</RouterLink>
          <RouterLink to={'/favorite'}>YOUR FAVORITE</RouterLink>
        </Navigation>
      </Container>
      <Box sx={{ height: '5px', width: '100%' }}>
        {isLoading && <LinearIndeterminate />}
      </Box>
    </HeaderStyled>
  );
};

export default Header;
