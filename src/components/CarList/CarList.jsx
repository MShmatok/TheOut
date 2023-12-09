import React from 'react';
import { ContainerCarList } from './CarList.styled';
import CarCard from 'components/CarCard/CarCard';
import PropTypes from 'prop-types';

const CarList = ({ data }) => {
  return (
    <ContainerCarList>
      {data.map(car => {
        return <CarCard key={car.id} data={car} />;
      })}
    </ContainerCarList>
  );
};

CarList.propTypes = {
  data: PropTypes.array,
};

export default CarList;
