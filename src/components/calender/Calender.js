import React from "react";
import { Heading } from "../Heading";
import { Event } from "./Event";
export const Calender = ({ data }) => {
  return (
    <div className="max-w-screen-lg px-2 pb-10 m-auto text-sm  mt-20 ">
      <Heading className="mb-8">Veranstaltungen</Heading>
      {data
        .filter((d) => d.date > new Date())
        .map((event) => {
          return <Event data={event} />;
        })}
    </div>
  );
};
