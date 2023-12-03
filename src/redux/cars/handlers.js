export const handlerAllCars = (state, { payload }) => {
    state.carsAll = payload;
}

export const handlerCarByPage = (state, { payload }) => {
    state.carsPagination = [...state.carsPagination, ...payload];
}


export const handleOnFilter = (state, { payload }) => {
    state.onFilter = payload;
}



export const handlePending = (state) => {
    state.contacts.isLoading = true;
    state.contacts.error = '';
}
export const handleFulfilled = (state) => {
    state.contacts.isLoading = false;
}
export const handleRejected = (state, { error }) => {
    state.contacts.isLoading = false;
    state.contacts.error = error.message;
}

