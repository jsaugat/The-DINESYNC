import "../Styles/App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import Orders from "../components/Orders";
import { Container } from "@/master";

export default function Profile() {
  return (
    <Container>
      <main className="relative flex items-start mb-[8.5rem]">
        {/* Left Nav Box */}
        <nav className="relative left-[30rem] flex flex-col items-start">
          <h3 className="text-5xl my-10">Account</h3>
          <ul className="profile-nav w-[300px] text-2xl space-y-4 grid grid-col-1">
            <NavLink
              to={"/profile/personal-info"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Personal Information
            </NavLink>
            <NavLink
              to={"/profile/orders"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Orders
            </NavLink>
          </ul>
        </nav>

        {/* Right Side Content */}
        <Routes>
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
    </Container>
  );
}
