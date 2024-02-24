import { useState } from "react";
import { UserSolid } from "@/assets/UserSolid";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "@/slices/usersApiSlice";
import { clearCredentials } from "@/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function AccountDropdown({ userInfo }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logout] = useLogoutMutation();

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logout().unwrap(); // make logout API call and unwrap the Promise
      dispatch(clearCredentials()); // clear STATE and LOCALSTORAGE
      navigate("/");
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <main className="flex flex-col justify-center gap-2">
      {/* Account Button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        onBlur={() => setDropdownOpen(false)}
        className={`flex gap-2 items-center justify-between min-w-60 border border-onyx px-5 py-2 text-black rounded-full ${
          dropdownOpen
            ? "dark:text-white dark:ring-1 dark:ring-white"
            : "dark:text-white"
        } hover:ring-white hover:ring-1 md:me-0 `}
      >
        {/* User solid icon */}
        <div className="flex gap-4">
          <UserSolid />
          <span className="font-normal">{userInfo.name}</span>
        </div>
        <svg
          className={`w-4 h-4 ms-3 transition-all ease-in-out ${
            dropdownOpen ? "rotate-180" : " "
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <section
        className={`${
          dropdownOpen ? "block" : "opacity-0"
        } absolute top-[90%] right-20 z-50 text-left text-2xl bg-white dark:bg-black divide-y divide-onyx border border-onyx rounded-lg w-fit`}
      >
        <div className="px-7 py-5 text-gray-900 dark:text-white cursor-default">
          <div className="truncate font-medium">My Account</div>
          <div className="truncate text-blue-500">{userInfo.email}</div>
        </div>

        <div className="p-2">
          <Link
            to="/profile"
            className="block px-5 py-2 hover:bg-neutral-900 rounded-md"
          >
            Edit Profile
          </Link>
        </div>
        <div className="p-2">
          <button
            onClick={logoutHandler}
            className="block px-5 py-2 hover:text-red-500 rounded-md w-full text-left"
          >
            Log out
          </button>
        </div>
      </section>
    </main>
  );
}
