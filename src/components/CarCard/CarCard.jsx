import React from 'react';
import {
  CardFeatureWrapper,
  CardTitleWrapper,
  ContainerCarCard,
  ImgWrapper,
  LayoutImg,
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
        <Feature>{}</Feature>
      </CardFeatureWrapper>
      <ButtonCard>Learn more</ButtonCard>
    </ContainerCarCard>
  );
};

export default CarCard;
