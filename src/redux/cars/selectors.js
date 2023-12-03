import { createSelector } from "@reduxjs/toolkit";

export const selectAllBrands = state => {
    const uniqueBrands = new Set(state.catalog.cars.map(car => car.make));
    const uniqueBrandsArray = Array.from(uniqueBrands);
    return uniqueBrandsArray;
}
export const selectFilterBrands = state => state.catalog.filter.brand;


export const selectAllContacts = state => state.contact.contacts.items;
export const selectIsLoading = state => state.contact.isLoading;
export const selectorIsLoading = state => state.contact.isLoading;
export const selectorIsOpenModal = state => state.contact.dataForUpdate;
export const selectorDataForModal = state => state.contact.dataForUpdate;

export const selectorFilteredBrands = createSelector([selectAllBrands, selectFilterBrands], (AllBrands, FilterBrands) => {
    return AllBrands.filter(item => {
        return item
            .trim()
            .toLocaleLowerCase()
            .includes(FilterBrands.trim().toLocaleLowerCase());
    })
});