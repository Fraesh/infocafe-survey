import React from "react";
import { Section } from "./Section";

export const MultiSelectQuestion = (props) => {
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
                type="checkbox"
                checked={value?.includes(o)}
                onClick={() => {
                  let opts = value?.split(",") || [];
                  if (opts.includes(o)) {
                    opts = opts.filter((i) => i === o);
                  } else {
                    opts.push(o);
                  }
                  onChange(id, opts.join(","));
                }}
              />
              <span>{o}</span>
            </>
          );
        })}
      </div>
    </Section>
  );
};
