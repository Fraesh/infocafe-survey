import React, { useState } from "react";
import { Heading } from "../Heading";
import { Section } from "./Section";
import { gql } from "@apollo/client";
import { useMutation, useQuery } from "react-apollo";
import { TextQuestion } from "./TextQuestion";
import { MultilineQuestion } from "./MultilineQuestion";
import { MultiSelectQuestion } from "./MultiSelectQuestion";
import { SelectQuestion } from "./SelectQuestion";

const UMFRAGEN = gql`
  {
    umfragen {
      edges {
        node {
          title
          databaseId
          umfrageMeta {
            options
            index
            color
            type
          }
        }
      }
    }
  }
`;

const CREATE_SUBMISSION = gql`
  mutation CreateSubmission($id: Int!, $answer: String!) {
    createSubmission(
      input: { clientMutationId: "1", id: $id, answer: $answer }
    ) {
      success
    }
  }
`;

export const Form = () => {
  const { loading, error, data } = useQuery(UMFRAGEN);
  const [createSubmission] = useMutation(CREATE_SUBMISSION);

  const [state, setState] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const surData = data ? formatData(data) : [];

  const onChange = (id, value) => {
    setState({ ...state, [id]: value });
  };

  const onSubmit = () => {
    if (submitted) return;
    setSubmitted(true);
    Object.entries(state).forEach(([id, answer]) => {
      createSubmission({ variables: { id: parseInt(id), answer } });
    });
  };

  return (
    <>
      <Heading className="max-w-screen-lg mx-auto sm:mt-20 p-2" id="umfrage">
        Was wollt Ihr?
      </Heading>

      {surData.map((q) => {
        switch (q.type) {
          case "Text":
            return <TextQuestion onChange={onChange} {...q} />;
          case "Langer Text":
            return <MultilineQuestion onChange={onChange} {...q} />;
          case "Auswahl":
            return (
              <SelectQuestion onChange={onChange} value={state[q.id]} {...q} />
            );
          case "Mehrfachauswahl":
            return (
              <MultiSelectQuestion
                onChange={onChange}
                value={state[q.id]}
                {...q}
              />
            );
        }
      })}

      <div className="max-w-screen-lg pt-6 pb-12 px-6 m-auto flex justify-end">
        <button
          type="submit"
          name="last"
          onClick={onSubmit}
          disabled={submitted}
          className="text-2xl text-blue-600 font-bold hover:text-blue-400"
        >
          {submitted ? "Vielen Dank!" : "Abschicken"}
        </button>
      </div>
    </>
  );
};

const formatData = (data) => {
  const d = data.umfragen.edges;

  return d
    .map((e) => {
      const options = (e.node.umfrageMeta.options || "").split(/\r?\n/);
      return {
        title: e.node.title,
        id: e.node.databaseId,
        type: e.node.umfrageMeta.type,
        color: e.node.umfrageMeta.color,
        index: e.node.umfrageMeta.index,
        options,
      };
    })
    .sort((a, b) => (a.index || 0) - (b.index || 0));
};
