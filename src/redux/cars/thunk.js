import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const { createAsyncThunk } = require("@reduxjs/toolkit")
const { getAllCars } = require("api/cars")

export const getAllthunk = createAsyncThunk('cars/getAll', async (_, { rejectWithValue }) => {
    try {
        const result = await getAllCars();
        return result;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})
