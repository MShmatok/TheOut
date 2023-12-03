// import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const { createAsyncThunk } = require("@reduxjs/toolkit")
const { getAllCars, getCarByPage } = require("api/cars")

export const getAllthunk = createAsyncThunk('cars/getAll', async (_, { rejectWithValue }) => {
    try {
        const result = await getAllCars();
        return result;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const getCarByPageThunk = createAsyncThunk('cars/getCarByPageThunk', async (page, { rejectWithValue }) => {
    try {
        const result = await getCarByPage(page);
        return result;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})