
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
// import { apiSlice } from "./api/api";

// export default configureStore({
//     reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(apiSlice.middleware),
// });

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

// export type RootStat = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;