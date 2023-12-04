import React from 'react';
import {
  ModalContainer,
  ModalDiscretion,
  ModalSubTitle,
  ModalTitleWrapper,
  RentalConditions,
  RentalConditionsWrapper,
} from './ModalContent.styled';
import NoPhoto from '../../img/NoPhoto.png';
import {
  CardFeatureWrapper,
  CardTitleWrapper,
  FeatureContainer,
  FirstLine,
  SecondLine,
} from 'components/CarCard/CarCard.styled';
import { ButtonBase, ButtonRental } from 'CommonStyle/Button.styled';
const data = {
  id: 9681,
  year: 2019,
  make: 'Toyota',
  model: 'Camry',
  type: 'Sedan',
  img: 'https://res.cloudinary.com/dfye2bobn/image/upload/v1694612601/auto/i4tffa7rau8akban0jgd.jpg',
  description:
    "The Toyota Camry is a reliable and comfortable sedan known for its spacious interior, smooth ride, and excellent fuel efficiency. It's a popular choice among families and commuters alike.",
  fuelConsumption: '5.8',
  engineSize: '2.5L 4-cylinder',
  accessories: ['Bluetooth connectivity', 'Keyless entry', 'Climate control'],
  functionalities: ['Front-Wheel Drive', 'Lane Departure Warning', 'Drive'],
  rentalPrice: '$55',
  rentalCompany: 'AutoRentalPro',
  address: '456 Sample Street, Lviv, Ukraine',
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nCredit card for security deposit",
  mileage: 8400,
};
const ModalContent = () => {
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
  const conditions = rentalConditions.split('\n');
  const age = conditions[0].match(/\d+/);

  return (
    <ModalContainer>
      <img
        src={img}
        onError={e => {
          e.target.src = NoPhoto;
        }}
        alt={make}
        width="461px"
        height="248px"
      />

      <ModalTitleWrapper>
        <h2>
          {make}
          <span> {model}</span>, {year}
        </h2>
      </ModalTitleWrapper>

      <CardFeatureWrapper $marginBottom="14px">
        <FirstLine>
          <FeatureContainer>{city}</FeatureContainer>
          <span></span>
          <FeatureContainer>{country}</FeatureContainer>
          <span></span>
          <FeatureContainer>id: {id}</FeatureContainer>
          <span></span>
          <FeatureContainer>Year: {year}</FeatureContainer>
          <span></span>
          <FeatureContainer>Type: {type}</FeatureContainer>
        </FirstLine>
        <SecondLine>
          <FeatureContainer>
            Fuel Consumption: {fuelConsumption}
          </FeatureContainer>
          <span></span>
          <FeatureContainer>Engine Size: {engineSize}</FeatureContainer>
        </SecondLine>
      </CardFeatureWrapper>
      <ModalDiscretion>{description}</ModalDiscretion>
      <ModalSubTitle>Accessories and functionalities:</ModalSubTitle>

      <CardFeatureWrapper $marginBottom="24px">
        <FirstLine>
          {accessories.map(item => {
            return (
              <>
                <FeatureContainer>{item}</FeatureContainer>
                <span></span>
              </>
            );
          })}
        </FirstLine>
        <SecondLine>
          {functionalities.map(item => {
            return (
              <>
                <FeatureContainer>{item}</FeatureContainer>
                <span></span>
              </>
            );
          })}
        </SecondLine>
      </CardFeatureWrapper>
      <ModalSubTitle>Rental Conditions: </ModalSubTitle>
      <RentalConditionsWrapper>
        <RentalConditions>
          Minimum age: <span> {age}</span>
        </RentalConditions>
        <RentalConditions>{conditions[1]}</RentalConditions>
        <RentalConditions>{conditions[2]}</RentalConditions>
        <RentalConditions>
          Mileage: <span>{mileage}</span>
        </RentalConditions>
        <RentalConditions>
          Price: <span>{rentalPrice}</span>
        </RentalConditions>
      </RentalConditionsWrapper>
      <ButtonRental>Rental car</ButtonRental>
    </ModalContainer>
  );
};

export default ModalContent;
