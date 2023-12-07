import CarList from 'components/CarList/CarList';
import Container from 'components/Container/Container';
import { Section, ShowPart } from 'pages/gallery/Gallery.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/cars/selectors';

const Favorite = () => {
  const favoriteCars = useSelector(selectFavorite);
  return (
    <Section>
      <Container>
        <ShowPart>
          <CarList data={favoriteCars} />
        </ShowPart>
      </Container>
    </Section>
  );
};

export default Favorite;
