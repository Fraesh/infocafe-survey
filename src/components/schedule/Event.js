import React from "react";
import { institutionColors } from "../../data/institutionColors";

export const Event = ({ data, day }) => {
  const { startTime, endTime, title, institution, to } = data;

  const c = institutionColors[institution];

  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const now = hours * 60 + minutes;
  const dayIndex = today.getDay();

  let live = false;

  if (dayIndex === day) {
    debugger;
    const [startHour, startMinutes] = startTime.split(":");
    const [endHour, endMinutes] = endTime.split(":");
    const st = parseInt(startHour) * 60 + parseInt(startMinutes);
    const et = parseInt(endHour) * 60 + parseInt(endMinutes);
    if (now >= st && now <= et) {
      live = true;
    }
  }

  return (
    <a
      href={to || "#"}
      target="_blank"
      className={`group flex my-4 bg-gray-100 hover:bg-${
        live ? "red" : c
      }-600 transition-colors ease-in-out duration-100 ${
        live ? "border-2 border-red-600 " : ""
      }`}
    >
      {live ? (
        <div
          className={`px-3 py-1 sm:w-32 bg-red-600  text-white font-semibold transition-colors ease-in-out duration-100 `}
        >
          <span>{"JETZT LIVE!"}</span>
        </div>
      ) : (
        <div
          className={`sm:px-3 py-1 sm:w-32 border-${c}-600 border-l-4 bg-${c}-200  text-${c}-800 transition-colors ease-in-out duration-100 group-hover:bg-${c}-600 group-hover:text-${c}-200`}
        >
          <span className="sm:block hidden">{institution}</span>
        </div>
      )}
      <div
        className={`ml-4 p-1 group-hover:text-${
          live ? "red" : c
        }-200 transition-colors ease-in-out duration-100 flex items-center`}
      >
        {title}
      </div>
      <div
        className={`py-1 px-4 text-gray-500 justify-end flex-1 group-hover:hidden flex items-center whitespace-no-wrap`}
      >
        {startTime} - {endTime}
      </div>
      <div
        className={`py-1 px-4 text-${
          live ? "red" : c
        }-200 justify-end flex-1 hidden group-hover:flex items-center`}
      >
        ➜
      </div>
    </a>
  );
};
