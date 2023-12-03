import React from 'react';
import { ContainerCarList } from './CarList.styled';
import CarCard from 'components/CarCard/CarCard';

const CarList = ({ data }) => {
  console.log(data);
  return (
    <ContainerCarList>
      {data.map(car => {
        return <CarCard key={car.id} data={car} />;
      })}
    </ContainerCarList>
  );
};

export default CarList;
