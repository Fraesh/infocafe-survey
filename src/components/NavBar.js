import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const NavBar = () => {
  return (
    <div className="w-full px-3 py-8 md:py-10 md:px-10 flex md:mb-20 items-center">
      <div className="text-blue-800 font-bold text-4xl flex-1">
        info<span className="text-blue-600">cafe</span>
      </div>
      <div className="flex hidden md:block items-center">
        <AnchorLink
          href="#angebote"
          className="mx-4 text-blue-800 font-semibold hover:text-blue-600"
        >
          Angebote
        </AnchorLink>
        <AnchorLink
          href="#veranstaltungen"
          className="mx-4 text-blue-800 font-semibold hover:text-blue-600"
        >
          Veranstaltungen
        </AnchorLink>
        <AnchorLink
          href="#umfrage"
          className="mx-4 text-blue-800 font-semibold hover:text-blue-600"
        >
          Umfrage
        </AnchorLink>
      </div>
    </div>
  );
};
