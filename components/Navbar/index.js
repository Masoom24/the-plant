"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cart from "../card";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="bg-white w-full shadow-sm relative">
      <div className="navbar flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-20 h-16 object-contain"
          />
        </div>

        {/* Hamburger icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {/* SVG for menu */}
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`w-full lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center text-black mt-4 lg:mt-0">
            {[
              { path: "/", label: "Home" },
              { path: "/categories", label: "Categories" },
              { path: "/best-sale", label: "Best Sale" },
              { path: "/order-history", label: "Your Order" },
            ].map((item, i) => (
              <li key={i} className="transition-all">
                <Link
                  href={item.path}
                  className="bg-[#B0DB9C] text-black px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#A0C88B]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart & Avatar */}
        <div className="flex gap-5 items-center mt-4 lg:mt-0">
          {/* 🛒 Cart Icon */}
          <div
            onClick={() => setShowCart(true)} //  Open modal
            className="btn btn-ghost btn-circle cursor-pointer"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
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
          </div>

          {/* Profile Avatar */}
          <div className="dropdown dropdown-end">
            {/* Avatar Dropdown... */}
          </div>
        </div>
      </div>

      {/*  Full-screen Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-[90%] h-[90%] p-6 rounded-lg overflow-y-auto relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-red-600"
            >
              ✖
            </button>
            <Cart /> {/*  Call your Cart component here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
