import React from "react";
import { institutionColors } from "../../data/institutionColors";

const tage = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export const Event = ({ data }) => {
  const {
    title,
    date,
    startTime,
    endTime,
    description,
    institution,
    to,
  } = data;

  const c = institutionColors[institution];

  return (
    <a
      href={to || "#"}
      target="_blank"
      className={`flex w-full my-4 shadow-sm border-l-4 border-${c}-600 sm:border-none group`}
    >
      <div
        className={` flex-col p-3 text-${c}-100 bg-${c}-600 items-center  justify-center hidden sm:flex `}
        style={{ width: "7rem" }}
      >
        <div className={`uppercase text-xs font-semibold leading-none`}>
          {tage[date.getDay()]}
        </div>
        <div className="text-5xl font-bold leading-none">{date.getDate()}</div>
        <div className={`uppercase text-xs font-semibold`}>
          {monate[date.getMonth()]}
        </div>
      </div>
      <div
        className={`grid col-gap-2 flex-1 px-4 py-2 bg-${c}-200 group-hover:bg-${c}-300 transition-colors duration-100 ease-in-out`}
        style={{
          gridTemplateColumns: "1fr auto",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <div className={`text-${c}-800 text-lg font-bold`}>{title}</div>
        <div className={`text-${c}-800 font-bold text-right`}>
          <div className="sm:hidden">
            {date.getDate()}. {monate[date.getMonth()]}
          </div>
          <div>
            {startTime} - {endTime}
          </div>
        </div>
        <div className="text-gray-800">{description}</div>
        <div className={`text-${c}-600 text-right `}>{institution}</div>
      </div>
    </a>
  );
};
