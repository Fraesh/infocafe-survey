import React from "react";
import { Calender } from "../components/calender/Calender";
import { NavBar } from "../components/NavBar";
import { Schedule } from "../components/schedule/Schedule";
import { Form } from "../components/survey/Form";
import { Footer } from "../components/Footer";

export const Main = () => {
  return (
    <>
      <NavBar />
      <Schedule />
      <Calender />
      <Form />
      <Footer />
    </>
  );
};
