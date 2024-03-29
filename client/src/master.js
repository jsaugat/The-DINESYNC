import App from "./App";
// header
import Logo from "./components/Logo";
import NavBar from "./components/Header/NavBar";
// footer
import Footer from "./components/Footer/Footer";
// container
import Container from "./components/Container";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Thanks from "./pages/Thanks";
import Menu from "./pages/Menu";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
// components
import CallToAction from "./components/Button";
import PointerBall from "./components/Motion/PointerBall";
import PrivateRoute from "./components/PrivateRoute";
import PersonalInfo from "./components/PersonalInfo.jsx";
import Orders from "./components/Orders.jsx";
import DatePicker from "./components/reservation/DatePicker";
import TimePicker from "./components/reservation/TimePicker";
import PartySizePicker from "./components/reservation/PartySizePicker";
import BookingForm from "./components/reservation/BookingForm";
import BookingDetails from "./components/reservation/BookingDetails";
import TablesViewDrawer from "./components/reservation/TablesViewDrawer";
import Check from "./components/Check"

export {
  // Pages
  Home,
  About,
  Reservation,
  Thanks,
  Menu,
  Login,
  Signup,
  Profile,
  // Main Components
  App,
  NavBar,
  Footer,
  Container,
  // Components
  PersonalInfo,
  Orders,
  Logo,
  CallToAction,
  PointerBall,
  DatePicker,
  TimePicker,
  PartySizePicker,
  BookingForm,
  BookingDetails,
  TablesViewDrawer,
  Check,
  // Route Protector
  PrivateRoute,
};
