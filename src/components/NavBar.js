import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full px-3 py-10 md:px-10 flex md:mb-20">
      <div className="text-blue-800 font-bold text-4xl flex-1">
        info<span className="text-blue-600">cafe</span>
      </div>
      <div className="flex hidden md:block">
        <a
          href="#"
          className="mx-4 text-blue-800 font-semibold hover:text-blue-600"
        >
          Angebote
        </a>
        <a
          href="#"
          className="mx-4 text-blue-800 font-semibold hover:text-blue-600"
        >
          Veranstaltungen
        </a>
        <a
          href="#"
          className="mx-4 text-blue-800 font-semibold hover:text-blue-600"
        >
          Umfrage
        </a>
      </div>
    </div>
  );
};
