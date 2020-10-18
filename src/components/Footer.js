import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-blue-900 w-full h-64">
      <div className="max-w-screen-lg m-auto py-10 px-2 text-blue-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <a href="https://infocafe.org" className="hover:text-blue-400">
              infocafe
            </a>
            <a
              href="https://neu-isenburg.de"
              className="hover:text-blue-400"
              to="datenschutz"
            >
              Stadt Neu-Isenburg
            </a>
          </div>
          <div>Reihe 2</div>
          <div className="grid grid-cols-1 gap-2">
            <Link className="hover:text-blue-400" to="impressum">
              Impressum
            </Link>
            <Link className="hover:text-blue-400" to="datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
