import { getAllthunk } from "./thunk";
import { handlerAllCars } from "./handlers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoggedUser: false,
    cars: [],
    filter: {
        brand: '',
        price: '',
        from: '',
        to: '',
    },
    dataForUpdate: ''
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllthunk.fulfilled, handlerAllCars)

    },
    reducers: {
        setFilterBrand: (state, { payload }) => { state.filter.brand = payload },
        setFilterPrice: (state, { payload }) => { state.filter.price = payload },
        setFilterFrom: (state, { payload }) => { state.filter.from = payload },
        setFilterTo: (state, { payload }) => { state.filter.to = payload },

        closeModal(state) { state.dataForUpdate = '' },
        openChangeModal(state, { payload }) {
            state.dataForUpdate = payload;
        }
    }
})

export const reducerCatalog = catalogSlice.reducer;
export const { closeModal, setFilterBrand, setFilterPrice, setFilterFrom, setFilterTo, openChangeModal } = catalogSlice.actions;
