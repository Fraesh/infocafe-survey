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

  let calData = data ? formatData(data) : undefined;

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (!calData) return null;
  calData = calData.filter((d) => d.date > yesterday);

  return (
    <div
      className="max-w-screen-lg px-2 pb-10 m-auto text-sm sm:mt-20 "
      id="veranstaltungen"
    >
      <Heading className="mb-8">Veranstaltungen</Heading>
      {calData.length > 0 &&
        calData.map((event) => {
          return <Event data={event} />;
        })}

      {calData.length === 0 && (
        <div>Zur Zeit stehen keine Veranstaltungen an.</div>
      )}
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
