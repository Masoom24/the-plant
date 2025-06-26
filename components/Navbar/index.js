"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full shadow-sm">
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`w-full lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center text-black mt-4 lg:mt-0">
            {["/", "/categories", "/best-sale"].map((path, i) => (
              <li
                key={i}
                className="transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <Link
                  href={path}
                  className="bg-[#B0DB9C] text-black px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#A0C88B] hover:shadow-lg transition-all duration-300"
                >
                  {path === "/"
                    ? "Home"
                    : path
                        .replace("/", "")
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart and Profile */}
        <div className="flex gap-5 items-center space-x-4 mt-4 lg:mt-0">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
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
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">8 Items</span>
                <span className="text-black">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block text-black">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
