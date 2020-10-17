import React from "react";
import { Event } from "./Event";

export const Day = ({ data, index }) => {
  const { name, events } = data;
  if (!events.length) return null;
  return (
    <div className="py-1">
      <div className="text-xl font-bold text-blue-700">{name}</div>
      <div>
        {events.map((event) => {
          return <Event data={event} day={(index + 1) % 7}></Event>;
        })}
      </div>
    </div>
  );
};
