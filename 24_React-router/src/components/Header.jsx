import React from "react";
import { Link } from "react-router-dom";

const navigationLinks = [
  { id: 1, text: "Home", routeTo: "/" },
  { id: 2, text: "About", routeTo: "/about-us" },
];

const Header = () => {
  return (
    <div className="bg-blue-500 flex gap-4 py-2">
      {navigationLinks.map((item) => (
        <Link key={item.id} to={item.routeTo}>
          {item.text}
        </Link>
      ))}
      <Link
        to="/contact"
        className="bg-red-700 text-white font-medium rounded-full px-5  py-1"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
