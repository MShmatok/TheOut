import React from 'react';
import NoPhoto from '../../img/NoPhoto.png';
import {
  CardFeatureWrapper,
  CardTitleWrapper,
  ContainerCarCard,
  FeatureContainer,
  FirstLine,
  ImgWrapper,
  SecondLine,
} from './CarCard.styled';
import { ButtonCard } from 'CommonStyle/Button.styled';

const CarCard = ({ data }) => {
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
  const location = address.split(',');
  const country = location[2];
  const city = location[1];
  const feature = accessories[2];

  return (
    <ContainerCarCard>
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
      <ButtonCard>Learn more</ButtonCard>
    </ContainerCarCard>
  );
};

export default CarCard;
