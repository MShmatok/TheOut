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
    onFilter: '',
    dataForModal: ''
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
        setCurrentPage: (state, { payload }) => { state.currentPage = state.currentPage + 1 },

        setOnFilter: handleOnFilter,


        closeModal(state) { state.dataForModal = '' },
        openChangeModal(state, { payload }) {
            state.dataForUpdate = payload;
        },
        clearData(state, { payload }) {
            state.carsAll = [];
            state.carsPagination = [];
        },
    }
})

export const reducerCatalog = catalogSlice.reducer;
export const { closeModal, clearData, setFilterBrand, setCurrentPage, setOnFilter, setFilterPrice, setFilterFrom, setFilterTo, openChangeModal } = catalogSlice.actions;
