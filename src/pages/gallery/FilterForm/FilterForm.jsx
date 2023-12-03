import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  DataListST,
  DropDownBrands,
  InputBrands,
  LabelST,
} from './FilterForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { getAllthunk } from 'redux/cars/thunk';
import {
  selectAllBrands,
  selectFilterBrands,
  selectorFilteredBrands,
} from 'redux/cars/selectors';
import { setFilterBrand } from 'redux/cars/slice';

const FilterForm = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const filteredBrands = useSelector(selectorFilteredBrands);
  const filterBrand = useSelector(selectFilterBrands);

  const dispatch = useDispatch();
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
    // resetForm,
  } = useFormik({
    initialValues: {
      brand: filterBrand,
      price: '',
      mileage: '',
    },
    onSubmit: values => {},
  });

  const onClickBrand = brand => {
    setFieldValue('brand', brand);
    dispatch(setFilterBrand(brand));
    setIsOpenDropDown(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <LabelST>
        Car brand
        <InputBrands
          type="text"
          name="brand"
          value={values.brand}
          //   onFocus={() => {
          //     setIsOpenDropDown(true);
          //   }}
          onClick={() => {
            setIsOpenDropDown(true);
          }}
          onChange={e => {
            setIsOpenDropDown(true);
            const { name, value } = e.target;
            setFieldValue(name, value);
            dispatch(setFilterBrand(value));
          }}
          placeholder="Enter the text"
        ></InputBrands>
        {isOpenDropDown && (
          <DropDownBrands>
            <ul>
              {filteredBrands.map((car, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      onClickBrand(car);
                    }}
                  >
                    {car}
                  </li>
                );
              })}
            </ul>
          </DropDownBrands>
        )}
      </LabelST>
    </form>
  );
};

export default FilterForm;
