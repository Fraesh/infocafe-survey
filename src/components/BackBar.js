import React from "react";
import { Link } from "react-router-dom";

export const BackBar = () => {
  return (
    <div className="w-full px-3 py-8 md:py-10 md:px-10 flex  items-center">
      <Link to="/" className="font-semibold">
        🠔 Zurück
      </Link>
    </div>
  );
};
