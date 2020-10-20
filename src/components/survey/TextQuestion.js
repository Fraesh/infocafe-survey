import React from "react";
import { Section } from "./Section";

export const TextQuestion = (props) => {
  const { color, id, onChange, title } = props;
  return (
    <Section color={color} heading={title}>
      <input
        className={`mt-2 w-full text-gray-800  rounded-md p-2 bg-${color}-100`}
        type="text"
        onChange={(e) => onChange(id, e.target.value)}
      />
    </Section>
  );
};
