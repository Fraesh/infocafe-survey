import React from "react";
import { Heading } from "../Heading";
import { Section } from "./Section";

export const Form = () => {
  return (
    <form
      action="http://www.grafstat.de/php-dsp/phps/gsdaten.php"
      method="post"
      id="umfrage"
      onsubmit="return GrafStat_Form1_Validator(this)"
      name="GrafStat_Form1"
    >
      <Heading className="max-w-screen-lg mx-auto sm:mt-20 p-2">
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
          <input className="" type="checkbox" name="F1[]" value="0" />
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
          className="mt-2 text-gray-800 rounded-md p-2 w-full bg-yellow-100"
          type="text"
          maxlength="250"
          name="F2"
        />
      </Section>
      <Section color="pink" heading="Auf welchen Content hättet ihr Lust?">
        <textarea
          className="mt-2 text-gray-800 w-full rounded-md p-2 bg-pink-100"
          name="F3"
          rows="4"
        ></textarea>
      </Section>
      <Section
        color="green"
        heading="Wann habt ihr unter der Woche Zeit euch etwas
                anzuschauen?"
      >
        <div className="flex flex-wrap mt-10 w-full ">
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="0" />
            <span className="font-semibold">13 Uhr</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="1" />
            <span className="font-semibold">14 Uhr</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="2" />
            <span className="font-semibold">15 Uhr</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="3" />
            <span className="font-semibold">16 Uhr</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="4" />
            <span className="font-semibold">17 Uhr</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="5" />
            <span className="font-semibold">18 Uhr</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="6" />
            <span className="font-semibold">19 Uhr</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F4" value="7" />
            <span className="font-semibold">20 Uhr</span>
          </div>
        </div>
      </Section>
      <Section color="orange" inverted heading="Und an welchen Wochentagen??">
        <div className="flex flex-wrap mt-10 w-full ">
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F5" value="0" />
            <span className="font-semibold">Montag</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F5" value="1" />
            <span className="font-semibold">Dienstag</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F5" value="2" />
            <span className="font-semibold">Mittwoch</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F5" value="3" />
            <span className="font-semibold">Donnerstag</span>
          </div>
          <div className="flex flex-col items-center mx-4 my-2">
            <input type="radio" name="F5" value="4" />
            <span className="font-semibold">Freitag</span>
          </div>
        </div>
      </Section>
      <Section color="red" heading="ICH HAB EINEN VORSCHLAG!!!">
        <input
          className="mt-2 w-full text-gray-800  rounded-md p-2 bg-red-100"
          type="text"
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
