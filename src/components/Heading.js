import React from "react";

export const Heading = ({ children, className }) => {
  return (
    <div className={"font-bold text-4xl text-blue-800 mb-4 " + className}>
      {children}
    </div>
  );
};
