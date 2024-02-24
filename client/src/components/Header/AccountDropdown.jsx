import { useState } from "react";
import { UserSolid } from "@/assets/UserSolid";
import { Link } from "react-router-dom";

export default function AccountDropdown({ userInfo }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        onBlur={() => setDropdownOpen(false)}
        className={`flex gap-2 items-center border border-onyx px-5 py-2 text-black rounded-full ${
          dropdownOpen ? "dark:text-white" : "dark:text-white"
        } hover:ring-white hover:ring-1 md:me-0 focus:ring-1 focus:ring-white`}
      >
        {/* User solid icon */}
        <UserSolid /> 
        <span>{userInfo.name}</span>
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
      <div
        className={`${
          dropdownOpen ? "block" : "hidden"
        } absolute top-[80%] right-10 z-10 text-left text-2xl bg-white dark:bg-black divide-y divide-onyx border border-onyx rounded-lg shadow w-fit`}
      >
        <div className="px-7 py-5 text-gray-900 dark:text-white cursor-default">
          <div className="truncate font-medium">My Account</div>
          <div className="truncate text-blue-500">{userInfo.email}</div>
        </div>
        <div className="p-2">
          <Link
            to="/profile"
            className="block px-5 py-2 hover:bg-neutral-800 rounded-md"
          >
            Edit Profile
          </Link>
        </div>
        <div className="p-2">
          <Link
            to="/profile"
            className="block px-5 py-2 hover:bg-neutral-800 text-red-500 rounded-md"
          >
            Log out
          </Link>
        </div>
      </div>
    </>
  );
}
