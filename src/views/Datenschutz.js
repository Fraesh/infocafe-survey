import React from "react";
import { BackBar } from "../components/BackBar";

export const Datenschutz = () => {
  return (
    <>
      <BackBar />
      <div className="max-w-screen-lg m-auto px-2">
        <div className="font-bold text-4xl text-blue-800 mb-10">
          Datenschutz
        </div>
        <p className="mb-6">
          Die Verwaltung Stadt Neu-Isenburg (das Infocafe) verarbeitet bei einer
          Vielzahl von Aufgaben personenbezogene Daten. Das geschieht entweder
          aufgrund von Gesetzen und anderen Rechtsvorschriften oder weil die
          Betroffenen in die Datenverarbeitung eingewilligt haben. Dabei ist der
          Datenschutz unverzichtbarer Bestandteil rechtmäßigen
          Verwaltungshandelns und ein Qualitätsmerkmal bürgerorientierter
          Dienstleistungen.
        </p>
        <p className="mb-6">
          Der gesetzliche Rahmen dafür findet sich im Hessischen
          Datenschutzgesetz. Die Stadtverwaltung Neu-Isenburg hat eine
          behördliche Datenschutzbeauftragte bestellt. Sie unterstützt die
          Verwaltung bei der Sicherstellung des Datenschutzes.
        </p>
        <p className="mb-6">
          Die Datenschutzbeauftragte ist zugleich Ansprechpartnerin für
          Einwohnerinnen und Einwohner, die Fragen zum Datenschutz in der
          Verwaltung haben oder auf Probleme hinweisen möchten. Solche Fragen
          und Hinweise werden auf Wunsch selbstverständlich vertraulich
          behandelt.
        </p>
        <p className="mb-6">
          Die Datenschutzbeauftragte ist bei der Wahrnehmung ihrer gesetzlichen
          Aufgaben unabhängig und nicht an Weisungen von anderen Beschäftigten
          oder Organisationseinheiten der Stadtverwaltung Neu-Isenburg gebunden.
        </p>
        <p className="mb-6">
          Welche Daten erheben wir bei Ihrem Besuch unserer Website?
        </p>
        <p className="mb-6">
          Sofern innerhalb unseres Internetangebotes die Möglichkeit zur Eingabe
          persönlicher oder geschäftlicher Daten (E-Mail-Adressen, Namen,
          Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens
          der Nutzerin oder des Nutzers auf ausdrücklich freiwilliger Basis.
        </p>
        <p className="mb-6">
          Diese Website benutzt die Webstatistik des Anbieters netcup GmbH, als
          Tool zur statistischen Auswertung der Besucherzugriffe unter der
          verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer
          gespeichert werden und die eine Analyse der Benutzung der Website
          durch sie ermöglichen. Die durch die Cookies erzeugten Informationen
          über Ihre Benutzung dieses Internetangebotes werden auf Servern des
          Anbieters (netcup GmbH) gespeichert. Die IP-Adresse wird sofort nach
          der Verarbeitung und vor deren Speicherung anonymisiert. Bei Aufruf
          und Nutzung unserer Webseite erheben wir die personenbezogenen Daten,
          die Ihr Browser automatisch an unseren Server übermittelt. Diese
          Informationen werden temporär in einem sog. Logfile gespeichert. Wenn
          Sie unsere Webseite nutzen, erheben wir die folgenden Daten, die für
          uns technisch erforderlich sind, um Ihnen unsere Webseite anzuzeigen
          und die Stabilität und Sicherheit zu gewährleisten:
        </p>
        <ul className="mb-6">
          <li>- IP-Adresse des anfragenden Rechners </li>
          <li>- Datum und Uhrzeit des Zugriffs </li>
          <li>- Name und URL der abgerufenen Datei </li>
          <li>- Website, von der aus der Zugriff erfolgt (Referrer-URL) </li>
          <li>
            - verwendeter Browser und ggf. das Betriebssystem Ihres Rechners,
            sowie der Name Ihres Access-Providers
          </li>
        </ul>
        <p className="mb-6">
          Sollten Sie alle Cookies auf ihrem Rechner löschen, müssen sie die
          Opt-Out-Cookies erneut setzen.
        </p>
        <p className="mb-6">
          Die erfassten Daten lassen keinen weiteren Aufschluss auf
          personenbezogene Daten zu. Personenbezogene Nutzerprofile können daher
          nicht gebildet werden. Eine Weitergabe an Dritte findet nicht statt.
          Im Übrigen gelten die Bestimmungen des Datenschutzrechts.
        </p>
      </div>
    </>
  );
};
