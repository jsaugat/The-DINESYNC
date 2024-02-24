import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/globals.scss";
import {
  App,
  Home,
  About,
  Reservation,
  Menu,
  Login,
  Signup,
  Profile,
  PrivateRoute,
} from "./master.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* these children are displayed using <Outlet /> */}
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="menu" element={<Menu />} />
    <Route path="booking" element={<Reservation />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    {/* Private Route */}
    <Route path="" element={<PrivateRoute />}>
      <Route path="profile" element={<Profile />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
