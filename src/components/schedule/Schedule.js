import React from "react";
import { Heading } from "../Heading";
import { Day } from "./Day";

export const Schedule = ({ data }) => {
  return (
    <div className="max-w-screen-lg px-2 pb-10 m-auto text-sm">
      <Heading>Wöchentliche Angebote</Heading>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(400px, 1fr))" }}
      >
        {data.map((day) => {
          return <Day data={day} />;
        })}
      </div>
    </div>
  );
};
