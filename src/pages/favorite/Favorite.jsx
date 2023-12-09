import CarList from 'components/CarList/CarList';
import Container from 'components/Container/Container';
import { Section, ShowPart } from 'pages/gallery/Gallery.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/cars/selectors';
import { Notice } from './Favotire.styled';

const Favorite = () => {
  const favoriteCars = useSelector(selectFavorite);

  return (
    <Section>
      <Container>
        <ShowPart>
          {Object.entries(favoriteCars).length ? (
            <CarList data={favoriteCars} />
          ) : (
            <Notice>
              Add your favorite cars by clicking on the heart on the right in
              the catalog
            </Notice>
          )}
        </ShowPart>
      </Container>
    </Section>
  );
};

export default Favorite;
