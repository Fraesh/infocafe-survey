import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "react-apollo";
import { Heading } from "../Heading";
import { Event } from "./Event";

const VERANSTALTUNGEN = gql`
  {
    veranstaltungen {
      edges {
        node {
          title
          veranstaltungenMeta {
            date
            starttime
            endtime
            institution
            to
            desc
          }
        }
      }
    }
  }
`;

export const Calender = () => {
  const { loading, error, data } = useQuery(VERANSTALTUNGEN);

  const calData = data ? formatData(data) : [];
  return (
    <div
      className="max-w-screen-lg px-2 pb-10 m-auto text-sm sm:mt-20 "
      id="veranstaltungen"
    >
      <Heading className="mb-8">Veranstaltungen</Heading>
      {calData
        .filter((d) => d.date > new Date())
        .map((event) => {
          return <Event data={event} />;
        })}
    </div>
  );
};

const formatData = (data) => {
  const d = data.veranstaltungen.edges;

  return d.map((e) => {
    const [day, month, year] = e.node.veranstaltungenMeta.date.split("/");

    return {
      title: e.node.title,
      description: e.node.veranstaltungenMeta.desc,
      startTime: e.node.veranstaltungenMeta.starttime.slice(0, -3),
      endTime: e.node.veranstaltungenMeta.endtime.slice(0, -3),
      date: new Date(`${year}-${month}-${day}`),
      institution: e.node.veranstaltungenMeta.institution,
      to: e.node.veranstaltungenMeta.to,
    };
  });
};
