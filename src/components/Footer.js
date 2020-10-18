import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-blue-900 w-full h-64">
      <div className="max-w-screen-lg m-auto py-10 px-2 text-blue-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>Reihe 1</div>
          <div>Reihe 2</div>
          <div>
            <Link className="hover:text-blue-400" to="impressum">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
