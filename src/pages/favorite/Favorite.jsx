import CarList from 'components/CarList/CarList';
import { Section, ShowPart } from 'pages/gallery/Gallery.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/cars/selectors';

const Favorite = () => {
  const favoriteCars = useSelector(selectFavorite);
  return (
    <div className="container">
      <Section>
        <ShowPart>
          <CarList data={favoriteCars} />
        </ShowPart>
      </Section>
    </div>
  );
};

export default Favorite;
