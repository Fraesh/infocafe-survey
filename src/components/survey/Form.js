import React from "react";
import { Heading } from "../Heading";
import { Section } from "./Section";

export const Form = () => {
  return (
    <form
      action="http://www.grafstat.de/php-dsp/phps/gsdaten.php"
      method="post"
      onsubmit="return GrafStat_Form1_Validator(this)"
      name="GrafStat_Form1"
    >
      <Heading className="max-w-screen-lg mx-auto mt-20 p-2">
        Was wollt Ihr?
      </Heading>
      <Section
        color="blue"
        heading="Wo würdest du dir Content von uns anschauen?"
      >
        <div
          className="grid gap-2 items-center mt-2"
          style={{ gridTemplateColumns: "auto 1fr" }}
        >
          <input type="checkbox" name="F1[]" value="0" />
          <span>YouTube</span>
          <input type="checkbox" name="F1[]" value="1" />
          <span>Twitch</span>
          <input type="checkbox" name="F1[]" value="2" />
          <span>Instagram</span>
          <input type="checkbox" name="F1[]" value="3" />
          <span>Etwas Anderes</span>
        </div>
      </Section>
      <Section color="yellow" heading="Was anderes?">
        <input
          className="mt-2 text-gray-800 rounded-md p-2"
          type="text"
          size="67"
          maxlength="250"
          name="F2"
        />
      </Section>
      <Section color="pink" heading="Auf welchen Content hättet ihr Lust?">
        <textarea
          className="mt-2 text-gray-800 rounded-md p-2"
          name="F3"
          rows="4"
          cols="67"
        ></textarea>
      </Section>
      <Section
        color="green"
        heading="Wann habt ihr unter der Woche Zeit euch etwas
                anzuschauen?"
      >
        <div
          className="grid gap-2  justify-items-center items-center mt-10"
          style={{ gridTemplateColumns: "repeat(8, 1fr)" }}
        >
          <input type="radio" name="F4" value="0" />
          <input type="radio" name="F4" value="1" />
          <input type="radio" name="F4" value="2" />
          <input type="radio" name="F4" value="3" />
          <input type="radio" name="F4" value="4" />
          <input type="radio" name="F4" value="5" />
          <input type="radio" name="F4" value="6" />
          <input type="radio" name="F4" value="7" />
          <span>13 Uhr</span>
          <span>14 Uhr</span>
          <span>15 Uhr</span>
          <span>16 Uhr</span>
          <span>17 Uhr</span>
          <span>18 Uhr</span>
          <span>19 Uhr</span>
          <span>20 Uhr</span>
        </div>
      </Section>
      <Section color="orange" inverted heading="Und an welchen Wochentagen??">
        <div
          className="grid gap-2  justify-items-center items-center mt-10"
          style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
        >
          <input type="radio" name="F5" value="0" />
          <input type="radio" name="F5" value="1" />
          <input type="radio" name="F5" value="2" />
          <input type="radio" name="F5" value="3" />
          <input type="radio" name="F5" value="4" />
          <span>Montag</span>
          <span>Dienstag</span>
          <span>Mittwoch</span>
          <span>Donnerstag</span>
          <span>Freitag</span>
        </div>
      </Section>
      <Section color="red" heading="ICH HAB EINEN VORSCHLAG!!!">
        <input
          className="mt-2 text-gray-800  rounded-md p-2"
          type="text"
          size="67"
          maxlength="250"
          name="F6"
        />
      </Section>
      <div className="max-w-screen-lg pt-6 pb-12 px-6 m-auto">
        <button
          type="submit"
          name="last"
          className="text-2xl text-blue-600 font-bold hover:text-blue-400"
        >
          Abschicken
        </button>
      </div>
    </form>
  );
};
