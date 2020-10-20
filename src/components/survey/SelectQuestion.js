import React from "react";
import { Section } from "./Section";

export const SelectQuestion = (props) => {
  const { color, id, onChange, title, options, value } = props;
  return (
    <Section color={color} heading={title}>
      <div
        className="grid gap-2 items-center mt-2"
        style={{ gridTemplateColumns: "auto 1fr" }}
      >
        {options.map((o) => {
          return (
            <>
              <input
                className=""
                type="radio"
                checked={value === o}
                onClick={() => onChange(id, o)}
              />
              <span>{o}</span>
            </>
          );
        })}
      </div>
    </Section>
  );
};
