import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { DropDownBrands, FormST, LabelST } from './FilterForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { getAllthunk } from 'redux/cars/thunk';
import {
  selectAllBrands,
  selectFilterBrands,
  selectFilterFrom,
  selectFilterPrice,
  selectFilterTo,
  selectorFilteredBrands,
} from 'redux/cars/selectors';
import { setFilterBrand } from 'redux/cars/slice';
import InputBrands from './FilterComponents/InputBrands';
import InputPrice from './FilterComponents/InputPrice';
import InputMileage from './FilterComponents/InputMileage';
import { ButtonBase } from 'CommonStyle/Button.styled';

const FilterForm = () => {
  const dispatch = useDispatch();
  const filterBrand = useSelector(selectFilterBrands);
  const filterPrice = useSelector(selectFilterPrice);
  const filterFrom = useSelector(selectFilterFrom);
  const filterTo = useSelector(selectFilterTo);

  useEffect(() => {
    dispatch(getAllthunk());
  }, [dispatch]);

  const {
    values,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      brand: filterBrand,
      price: filterPrice,
      from: filterFrom,
      to: filterTo,
    },
    onSubmit: values => {
      console.log('test');
    },
  });

  return (
    <FormST onSubmit={handleSubmit}>
      <InputBrands values={values} setFieldValue={setFieldValue} />
      <InputPrice values={values} setFieldValue={setFieldValue} />
      <InputMileage values={values} setFieldValue={setFieldValue} />
      <ButtonBase type="submit">Search</ButtonBase>
      <ButtonBase
        type="button"
        onClick={() => {
          resetForm({
            values: {
              brand: '',
              price: '',
              from: '',
              to: '',
            },
          });
        }}
      >
        Clear filter
      </ButtonBase>
    </FormST>
  );
};

export default FilterForm;
