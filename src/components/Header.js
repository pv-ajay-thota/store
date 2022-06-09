import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const [userName,setUserName] = useState("User");
  return (
    <>
      <div className="header">
        <nav className="bg-gray-800 py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="font-bold text-xl text-white hover:scale-110"
              >
                Cart Name
              </div>
            </div>

            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <div
                onClick={() => {
                  navigate("/OrderSummary");
                }}
                className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent hover:cursor-pointer hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent">
                Hi, {userName}
              </div>
              <div
                href="/"
                className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1 hover:cursor-pointer"
              >
                Sign Out
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
