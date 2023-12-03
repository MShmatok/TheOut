import { configureStore } from "@reduxjs/toolkit";
import { reducerCatalog } from "./cars/slice";
import { reducerRoot } from "./root/slice";


export const store = configureStore({
    reducer: {
        catalog: reducerCatalog,
        root: reducerRoot,

    },
});
