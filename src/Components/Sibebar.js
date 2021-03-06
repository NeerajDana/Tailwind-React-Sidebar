import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../ThemeContext";
const userProfileImage = `https://scontent.fdel42-1.fna.fbcdn.net/v/t1.6435-9/57624905_2442339965785962_6352756075350982656_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=vNjPtukrl6MAX_1iIFs&_nc_ht=scontent.fdel42-1.fna&oh=9ed8dc4a27d05303d511afcd58ab9cbc&oe=60A4B81A`;
const items = [
  {
    name: "Dashboard",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    name: "Overview",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    name: "Chat",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    name: "Team",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
];
const SideBar = () => {
  const value = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col w-64 px-6  `}
    >
      {/* {Header Section} */}
      <div
        className={`flex items-center justify-start w-full h-24 space-x-8 `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="font-sans text-lg font-medium">Smartcodehub</span>
      </div>
      <div
        className={`flex flex-col flex-1 h-full py-8 border-t border-b border-${value.bgColor}-${value.theme.text} border-opacity-25`}
      >
        <div
          className={`flex items-center justify-between w-full p-3 space-x-2 text-${value.bgColor}-${value.theme.text} bg-${value.bgColor}-${value.theme.profile} bg-opacity-70 rounded-lg `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex flex-col flex-1">
            <h2 className="text-sm">Neeraj Dana</h2>
            <span
              className={`text-xs font-semibold text-${value.bgColor}-${value.theme.text}`}
            >
              See Details
            </span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col flex-1 py-4">
          <div
            className={`flex flex-col space-y-2 text-${value.bgColor}-${value.theme.text}`}
          >
            {items.map((a) => {
              return (
                <div className="flex items-center w-full p-2 space-x-4">
                  {a.Icon()}
                  <span className="text-sm font-semibold">{a.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`flex flex-col w-full p-6 space-y-2 text-${value.bgColor}-${value.theme.text} bg-${value.bgColor}-${value.theme.notify} bg-opacity-20 rounded-lg`}
        >
          <h3 className="text-sm font-semibold">Used Space</h3>
          <p className="text-sm">Admin is updated and i am not</p>
        </div>
      </div>
      <div
        className={`flex items-center justify-start py-6 text-${value.bgColor}-${value.theme.text} border-t border-b border-gray-100 border-opacity-25`}
      >
        <img src={userProfileImage} className="w-12 h-12 mr-4 rounded-full" />
        <span className="flex-1 text-sm font-semibold">Neeraj Dana</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
