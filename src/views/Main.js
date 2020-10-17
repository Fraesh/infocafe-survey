import React from "react";
import { Calender } from "../components/calender/Calender";
import { NavBar } from "../components/NavBar";
import { Schedule } from "../components/schedule/Schedule";
import { Form } from "../components/survey/Form";
import { eventData } from "../data/events";
import { scheduleData } from "../data/schedule";
import { Footer } from "../components/Footer";

export const Main = () => {
  return (
    <>
      <NavBar />
      <Schedule data={scheduleData} />
      <Calender data={eventData} />
      <Form />
      <Footer />
    </>
  );
};
