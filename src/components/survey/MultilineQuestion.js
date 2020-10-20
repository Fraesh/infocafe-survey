import React from "react";
import { Section } from "./Section";

export const MultilineQuestion = (props) => {
  const { color, id, onChange, title } = props;
  return (
    <Section color={color} heading={title}>
      <textarea
        onChange={(e) => onChange(id, e.target.value)}
        className={`mt-2 w-full text-gray-800  rounded-md p-2 bg-${color}-100`}
        name="F3"
        rows="4"
      ></textarea>
    </Section>
  );
};

//DE88 1203 0000 1072 5563 58
