import React from "react";
import { institutionColors } from "../../data/institutionColors";

export const Event = ({ data }) => {
  const { time, title, institution, to } = data;

  const c = institutionColors[institution];
  return (
    <a
      href={to || "#"}
      className={`group flex my-4 bg-gray-100 hover:bg-${c}-600 transition-colors ease-in-out duration-100`}
    >
      <div
        className={`sm:px-3 py-1 sm:w-32 border-${c}-600 border-l-4 bg-${c}-200  text-${c}-800 transition-colors ease-in-out duration-100 group-hover:bg-${c}-600 group-hover:text-${c}-200`}
      >
        <span className="sm:block hidden"> {institution}</span>
      </div>
      <div
        className={`ml-4 p-1 group-hover:text-${c}-200 transition-colors ease-in-out duration-100`}
      >
        {title}
      </div>
      <div
        className={`py-1 px-4 text-gray-500 text-right flex-1 group-hover:hidden`}
      >
        {time}
      </div>
      <div
        className={`py-1 px-4 text-${c}-200 text-right flex-1 hidden group-hover:block`}
      >
        ➜
      </div>
    </a>
  );
};
