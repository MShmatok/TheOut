import { createSelector } from "@reduxjs/toolkit";

export const selectAllBrands = state => {
    const uniqueBrands = new Set(state.catalog.cars.map(car => car.make));
    const uniqueBrandsArray = Array.from(uniqueBrands);
    return uniqueBrandsArray;
}

export const selectRangePrice = state => {
    const catalog = state.catalog.cars;
    let maxPrice = 0;
    const rangePrice = [];

    for (let index = 0; index < catalog.length; index++) {
        const currentPrice = Number(catalog[index].rentalPrice.split('').slice(1).join(''))
        if (maxPrice < currentPrice) {
            maxPrice = currentPrice
        }
    }
    for (let number = 10; number <= Math.ceil(maxPrice / 10) * 10; number = number + 10) {
        rangePrice.push(number)
    }

    return rangePrice;
}
export const selectFilterBrands = state => state.catalog.filter.brand;
export const selectFilterPrice = state => state.catalog.filter.price;
export const selectFilterFrom = state => state.catalog.filter.from;
export const selectFilterTo = state => state.catalog.filter.to;


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
    }).sort((a, b) => a - b)
});