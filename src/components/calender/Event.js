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
  const { title, date, time, description, institution } = data;

  const c = institutionColors[institution];

  return (
    <div className="flex w-full my-4 shadow-sm">
      <div
        className={`flex flex-col p-3 text-${c}-100 bg-${c}-600 items-center `}
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
        className={`grid flex-1 px-4 py-2 bg-${c}-200`}
        style={{
          gridTemplateColumns: "1fr auto",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <div className={`text-${c}-800 text-lg font-bold`}>{title}</div>
        <div className={`text-${c}-800 font-bold`}>{time}</div>
        <div className="text-gray-800">{description}</div>
        <div className={`text-${c}-600 text-right`}>{institution}</div>
      </div>
    </div>
  );
};
