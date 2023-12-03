import React, { useEffect } from 'react';
import { FilterPart, Section, ShowPart } from './Gallery.styled';
import FilterForm from './FilterForm/FilterForm';
import { useDispatch, useSelector } from 'react-redux';
import {  getCarByPageThunk } from 'redux/cars/thunk';
import CarList from 'components/CarList/CarList';
import {
  selectCarsPagination,
  selectCurrentPage,
  selectFilteredCars,
  selectOnFilter,
} from 'redux/cars/selectors';
// import { setCarsFiltered } from 'redux/cars/slice';

const Gallery = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const onFilter = useSelector(selectOnFilter);
  const FilteredCars = useSelector(selectFilteredCars);
  const CarsPagination = useSelector(selectCarsPagination);

  useEffect(() => {
    dispatch(getCarByPageThunk(currentPage));
  }, [dispatch, currentPage]);
  console.log('onFilter', onFilter);
  console.log('FilteredCars', FilteredCars);

  return (
    <div className="container">
      <Section>
        <FilterPart>
          <FilterForm />
        </FilterPart>
        <ShowPart>
          {onFilter && <CarList data={FilteredCars} />}

          {!onFilter && <CarList data={CarsPagination} />}
        </ShowPart>
      </Section>
    </div>
  );
};

export default Gallery;
