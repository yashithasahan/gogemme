"use client";
import { AlignJustify, MapPin, SlidersVertical, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="bg-primary  relative  text-white ">
        <div className="flex flex-row gap-2 px-2 py-4">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open drawer">
            <AlignJustify color="white" />
          </button>
          <span>Gem Lanka</span>
        </div>
        <div className=" bg-white p-2 flex flex-row gap-4 items-center shadow ">
          <input
            type="text"
            className="border w-full border-gray-200 rounded-md p-1 text-gray-600 focus:outline-none "
            placeholder="Search"
          ></input>
          <div className="flex  items-center text-black gap-2">
            <MapPin size={18} color="black" /> Location
          </div>
          <SlidersVertical color="black" size={24} />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-50 transition-opacity duration-200 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div
          className={`bg-primary w-[90%] h-screen overflow-y-auto p-4 relative transform transition-transform duration-200 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-4"
            onClick={() => setIsOpen(false)}
            aria-label="Close drawer"
          >
            <X color="white" />
          </button>
          <nav className="pt-4">
            <ul>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-300 ">
                  Home
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Post a Add
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="pb-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Drawer;
