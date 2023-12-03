import React from 'react';
import {
  CardFeatureWrapper,
  CardTitleWrapper,
  ContainerCarCard,
  FeatureContainer,
  FirstLine,
  ImgWrapper,
  LayoutImg,
  SecondLine,
} from './CarCard.styled';
import { ButtonBase, ButtonCard } from 'CommonStyle/Button.styled';
import Feature from './component/Feature';

const CarCard = ({ data }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = data;
  const location = address.split(',');
  const country = location[2];
  const city = location[1];
  const feature = accessories[2];

  return (
    <ContainerCarCard>
      <ImgWrapper>
        <img src={img} alt={make} />
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
