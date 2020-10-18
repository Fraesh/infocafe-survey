import React from "react";
import { Heading } from "../Heading";
import { Day } from "./Day";

export const Schedule = ({ data }) => {
  return (
    <div className="max-w-screen-lg px-2 pb-10 m-auto text-sm" id="angebote">
      <Heading>Wöchentliche Angebote</Heading>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(350px, 1fr))" }}
      >
        {data.map((day, i) => {
          return <Day data={day} index={i} />;
        })}
      </div>
    </div>
  );
};
