import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import selectionReducer from "./slices/reservation/selectionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // api state will be displayed in the redux devtools - https://shorturl.at/eDKZ0
    selection: selectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // uses the default middleware provided by Redux Toolkit for store.
  devTools: true, // Enables the use of Redux DevTools Extension.
});

export default store;
