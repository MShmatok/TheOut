import React, { useEffect } from 'react';
import { FilterPart, LoadMore, Section, ShowPart } from './Gallery.styled';
import FilterForm from './FilterForm/FilterForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllthunk, getCarByPageThunk } from 'redux/cars/thunk';
import CarList from 'components/CarList/CarList';
import {
  selectAllCars,
  selectCarsPagination,
  selectCurrentPage,
  selectFilteredCars,
  selectOnFilter,
} from 'redux/cars/selectors';
import { clearData, setCurrentPage } from 'redux/cars/slice';
import { ButtonLoadMore } from 'CommonStyle/Button.styled';
import { selectorIsLoading } from 'redux/root/selectors';
// import { setCarsFiltered } from 'redux/cars/slice';

const Gallery = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const onFilter = useSelector(selectOnFilter);
  const FilteredCars = useSelector(selectFilteredCars);
  const CarsPagination = useSelector(selectCarsPagination);
  const allCars = useSelector(selectAllCars);
  const isLoading = useSelector(selectorIsLoading);

  useEffect(() => {
    dispatch(clearData());
    dispatch(getAllthunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCarByPageThunk(currentPage));
  }, [dispatch, currentPage]);

  const loadMore = () => {
    if (allCars.length / 12 > currentPage) {
      dispatch(setCurrentPage());
    }
  };

  const showLoadMore =
    allCars.length / 8 > currentPage && !onFilter && !isLoading;
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
        <LoadMore>
          {showLoadMore && (
            <ButtonLoadMore type="button" onClick={loadMore}>
              Load More
            </ButtonLoadMore>
          )}
        </LoadMore>
      </Section>
    </div>
  );
};

export default Gallery;
