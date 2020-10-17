import React from "react";
import { Heading } from "../Heading";

export const Section = ({ children, heading, color, inverted }) => {
  return (
    <div className={`px-2 py-2 md:py-6`}>
      <div
        className={`bg-${color}-${
          inverted ? 400 : 700
        } p-8 max-w-screen-lg m-auto rounded-xl text-${color}-${
          inverted ? 800 : 400
        } shadow-md`}
      >
        <div
          className={`text-${color}-${
            inverted ? 800 : 300
          } font-semibold text-2xl mb-3`}
        >
          {heading}
        </div>
        {children}
      </div>
    </div>
  );
};
