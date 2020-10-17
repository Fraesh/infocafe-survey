import React from "react";
import { Event } from "./Event";

export const Day = ({ data }) => {
  const { name, events } = data;
  if (!events.length) return null;
  return (
    <div className="py-1">
      <div className="text-xl font-bold text-blue-700">{name}</div>
      <div>
        {events.map((event) => {
          return <Event data={event}></Event>;
        })}
      </div>
    </div>
  );
};
