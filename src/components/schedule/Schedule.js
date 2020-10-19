import React from "react";
import { Heading } from "../Heading";
import { Day } from "./Day";
import { gql } from "@apollo/client";
import { useQuery } from "react-apollo";

const STUNDENPLAENE = gql`
  {
    stundenplaene {
      edges {
        node {
          title
          stundenplanMeta {
            starttime
            endtime
            institution
            to
            day
          }
        }
      }
    }
  }
`;

export const Schedule = () => {
  const { loading, error, data } = useQuery(STUNDENPLAENE);

  const schData = data ? formatData(data) : [];

  return (
    <div className="max-w-screen-lg px-2 pb-10 m-auto text-sm" id="angebote">
      <Heading>Wöchentliche Angebote</Heading>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(350px, 1fr))" }}
      >
        {schData.map((day, i) => {
          return <Day data={day} index={i} />;
        })}
      </div>
    </div>
  );
};

const tage = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];
const formatData = (data) => {
  const d = data.stundenplaene.edges;

  let res = [];

  const mappedData = d.map((e) => {
    return {
      title: e.node.title,
      description: e.node.stundenplanMeta.desc,
      startTime: e.node.stundenplanMeta.starttime.slice(0, -3),
      endTime: e.node.stundenplanMeta.endtime.slice(0, -3),
      day: e.node.stundenplanMeta.day,
      institution: e.node.stundenplanMeta.institution,
      to: e.node.stundenplanMeta.to,
    };
  });

  tage.forEach((tag) => {
    const filteredData = mappedData.filter((e) => e.day === tag);
    if (filteredData.length) {
      const sortedData = filteredData.sort((a, b) => {
        const [aHour, aMinute] = a.startTime.split(":");
        const [bHour, bMinute] = b.startTime.split(":");
        return aHour * 60 + aMinute - (bHour * 60 + bMinute);
      });
      res.push({ name: tag, events: sortedData });
    }
  });

  return res;
};
