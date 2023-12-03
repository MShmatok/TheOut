import { getAllthunk, getCarByPageThunk } from "./thunk";
import { handleOnFilter, handlerAllCars, handlerCarByPage } from "./handlers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    carsAll: [],
    carsPagination: [],

    currentPage: 1,
    filter: {
        brand: '',
        price: '',
        from: '',
        to: '',
    },
    onFilter: {
        brand: 'Buick',
        price: 100,
        from: 1525,
        to: 12125,
    },
    dataForUpdate: ''
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllthunk.fulfilled, handlerAllCars)
            .addCase(getCarByPageThunk.fulfilled, handlerCarByPage)

    },
    reducers: {
        setFilterBrand: (state, { payload }) => { state.filter.brand = payload },
        setFilterPrice: (state, { payload }) => { state.filter.price = payload },
        setFilterFrom: (state, { payload }) => { state.filter.from = payload },
        setFilterTo: (state, { payload }) => { state.filter.to = payload },
        setOnFilter: handleOnFilter,


        closeModal(state) { state.dataForUpdate = '' },
        openChangeModal(state, { payload }) {
            state.dataForUpdate = payload;
        }
    }
})

export const reducerCatalog = catalogSlice.reducer;
export const { closeModal, setFilterBrand, setOnFilter, setFilterPrice, setFilterFrom, setFilterTo, openChangeModal } = catalogSlice.actions;
