import { configureStore, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
// import { apiSlice } from "./api/api";

// export default configureStore({
//     reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(apiSlice.middleware),
// });

const initialState = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.push(action.payload);
      console.log("state", action.payload);
    },
  },
});
export const { addToBuilder } = productSlice.actions;

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// export type RootStat = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
