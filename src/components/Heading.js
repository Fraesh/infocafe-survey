import React from "react";

export const Heading = ({ children, className, id }) => {
  return (
    <div
      className={"font-bold text-4xl text-blue-800 mb-4 " + className}
      id={id}
    >
      {children}
    </div>
  );
};
