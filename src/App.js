import React, { useState, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import "./App.css";
import Sibebar from "./Components/Sibebar";
import { ThemeToggle } from "./Components/ThemeToggle";
import { themes, ThemeContext } from "./ThemeContext";

export const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const [bgColor, setBgColor] = useState("indigo");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        bgColor,
        showSidebar,
        setShowSidebar,
        theme,
        setTheme,
        setBgColor,
      }}
    >
      <MainLayout />
    </ThemeContext.Provider>
  );
};

function MainLayout({}) {
  const value = useContext(ThemeContext);

  return (
    <div
      className={`flex relative text-${value.bgColor}-${value.theme.text}
      py-${value.showSidebar ?'4':'0'}
      bg-${value.bgColor}-${value.theme.main}  space-x-4 justify-start w-screen h-screen `}
    >
       <Transition
        show={value.showSidebar}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Sibebar />
      </Transition>
     

      <div
        className={`flex  flex-col w-full  p-${value.showSidebar ?'4':'0'} bg-opacity-30 bg-clip-padding blur-lg shadow  
         rounded-l-lg  flex-1 bg-${value.bgColor}-${value.theme.profile}`}
      >
        <Navbar />
        <div className="flex flex-col justify-between flex-1 p-16 space-y-16 sm:space-y-0 sm:flex-row">
          {[1,2, 3, 4].map((a) => (
            <div
              className={`flex relative justify-between w-60 h-36 p-4 bg-${value.bgColor}-${value.theme.main} rounded-lg`}
            >
              <div
                className={`flex flex-col  p-6 space-y-2 text-${value.bgColor}-${value.theme.text} 
               bg-opacity-20 rounded-lg`}
              >
                <h3 className="text-sm font-semibold">Used Space</h3>
                <p className="text-sm">Admin is updated </p>
              </div>
              <img
                className="absolute top-0 z-auto h-40 -mt-10 right-4"
                src={`/${a}.png`}
              ></img>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
        <ThemeToggle />
        </div>
    
      </div>
    </div>
  );
}

function Navbar() {
  const value = useContext(ThemeContext);

  return (
    <div
      className={`w-full  rounded px-4 py-2  flex justify-between items-center  bg-${value.bgColor}-${value.theme.main}`}
    >
       <svg
        onClick={()=>value.setShowSidebar(s=>!s)}
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      <nav className="hidden px-8 py-2 space-x-8 sm:flex">
       
        {["Home", "About", "Features", "Service", "Contact"].map((a) => {
          return <div>{a}</div>;
        })}
      </nav>
      
    </div>
  );
}
