import React from 'react';
import NoPhoto from '../../img/NoPhoto.png';
import icons from '../../img/svg/sprite.svg';

import {
  ButtonHeard,
  CardFeatureWrapper,
  CardTitleWrapper,
  ContainerCarCard,
  FeatureContainer,
  FirstLine,
  ImgWrapper,
  SecondLine,
} from './CarCard.styled';
import { ButtonCard } from 'CommonStyle/button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite, openModal } from 'redux/cars/slice';
import { selectFavorite } from 'redux/cars/selectors';

const CarCard = ({ data }) => {
  const dispatch = useDispatch();

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,

    mileage,
  } = data;

  const onClick = data => {
    dispatch(openModal(data));
  };
  const favoriteCars = useSelector(selectFavorite);

  const toggleFavorite = data => {
    if (favoriteCars.some(car => car.id === data.id)) {
      dispatch(deleteFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };
  const location = address.split(',');
  const country = location[2];
  const city = location[1];
  const feature = accessories[2];

  return (
    <ContainerCarCard>
      <ButtonHeard
        onClick={() => {
          toggleFavorite(data);
        }}
      >
        {favoriteCars.some(car => car.id === data.id) ? (
          <svg width="24" height="24">
            <use href={icons + '#active'}></use>
          </svg>
        ) : (
          <svg width="24" height="24">
            <use href={icons + '#normal'}></use>
          </svg>
        )}
      </ButtonHeard>
      <ImgWrapper>
        <img
          src={img}
          onError={e => {
            e.target.src = NoPhoto;
          }}
          alt={make}
        />
      </ImgWrapper>
      <CardTitleWrapper>
        <h2>
          {make}
          <span> {model}</span>, {year}
        </h2>
        <h2>{rentalPrice}</h2>
      </CardTitleWrapper>
      <CardFeatureWrapper>
        <FirstLine>
          <FeatureContainer>{city}</FeatureContainer>
          <span></span>
          <FeatureContainer>{country}</FeatureContainer>
          <span></span>
          <FeatureContainer>{rentalCompany}</FeatureContainer>
        </FirstLine>
        <SecondLine>
          <FeatureContainer>{type}</FeatureContainer>
          <span></span>
          <FeatureContainer>{make}</FeatureContainer>
          <span></span>
          <FeatureContainer>{mileage}</FeatureContainer>
          <span></span>
          <FeatureContainer>{feature}</FeatureContainer>
        </SecondLine>
      </CardFeatureWrapper>
      <ButtonCard
        onClick={() => {
          onClick(data);
        }}
      >
        Learn more
      </ButtonCard>
    </ContainerCarCard>
  );
};

export default CarCard;
