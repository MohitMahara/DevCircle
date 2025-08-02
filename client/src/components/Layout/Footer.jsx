import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-semibold">
            <p>DevCircle</p>
          </div>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/browse-events" className="hover:text-gray-400">
                Messaging
              </Link>
            </li>
            <li>
              <Link to="/browse-events" className="hover:text-gray-400">
                ContactUs
              </Link>
            </li>

          </ul>

          {/* Right - Copyright */}
          <p className="mt-4 md:mt-0 text-sm">
            © {new Date().getFullYear()} DevCircle. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};