import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // uses the default middleware provided by Redux Toolkit for store.
  devTools: true, // Enables the use of Redux DevTools Extension.
});

export default store;