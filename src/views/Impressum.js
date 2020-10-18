import React from "react";
import { BackBar } from "../components/BackBar";

export const Impressum = () => {
  return (
    <>
      <BackBar />
      <div className="max-w-screen-lg m-auto px-2">
        <div className="font-bold text-4xl text-blue-800 mb-10"> Impressum</div>
        <div className="font-bold mb-2">Herausgeber:</div>
        <p className="mb-10">
          Magistrat der Stadt Neu-Isenburg <br />
          Hugenottenallee 53 <br />
          63263 Neu-Isenburg <br />
          Tel:06102 209929
        </p>
        <div className="font-bold mb-2">Redaktion:</div>
        Stephan Schölzel
        <div className="font-bold mt-10 mb-2">Disclaimer:</div>
        <p>
          Haftungsausschluss für den Webauftritt des infocafes – Inhalt des
          Webangebotes Das infocafe ist bemüht, sein Webangebot stets aktuell
          und inhaltlich richtig, sowie vollständig anzubieten. Dennoch ist das
          Auftreten von Fehlern nicht völlig auszuschließen. Das infocafe
          übernimmt keine Haftung für die Aktualität, die inhaltliche
          Richtigkeit sowie für die Vollständigkeit der im Webangebot
          eingestellten Informationen. Dies bezieht sich auch auf eventuelle
          Schäden materieller oder ideeller Art Dritter, die durch die Nutzung
          dieses Webangebotes verursacht wurden. Copyright: Das Layout der
          Homepage, die verwendeten Grafiken und Bilder, die Sammlung sowie
          einzelne Beiträge sind urheberrechtlich geschützt. Alle Rechte, auch
          die der fotomechanischen Wiedergabe, der Vervielfältigung und der
          Verbreitung mittels besonderer Verfahren (zum Beispiel
          Datenverarbeitung, Datenträger und Datennetze) auch teilweise, behält
          sich das infocafe vor. Entsprechende Absprachen für die Nutzung
          unseres Webangebots können getroffen werden. Externe Verweise und
          Links: Mit Urteil vom 12.Mai 1998 hat das LG Hamburg entschieden, dass
          man durch die Anbringung eines Links die Inhalte der gelinkten Seite
          ggf. mit zu verantworten hat. Dies kann, so das LG, nur dadurch
          verhindert werden dass man sich ausdrücklich von diesen Inhalten
          distanziert. Wir haben auf unseren Seiten Links zu Seiten im Internet
          gelegt, deren Inhalt und Aktualisierung nicht dem Einflussbereich des
          infocafe unterliegen. Für alle diese Links gilt: „Das infocafe hat
          keinen Einfluss auf Gestaltung und Inhalte fremder Internetseiten. Es
          distanziert sich daher von allen fremden Inhalten, auch wenn auf diese
          von Seiten des infocafes verlinkt wurden“. Diese Erklärung gilt für
          alle auf unserer Homepage angezeigten Links und für alle Inhalte der
          Seiten, zu denen die bei uns angemeldeten Banner und Links führen.
          Datenschutz: Sofern innerhalb des Internetangebotes die Möglichkeit
          der Eingabe von persönlichen Daten (E-Mailadresse, Namen, Anschriften)
          besteht, erfolgt diese freiwillig. Das infocafe erklärt ausdrücklich,
          dass es diese Daten nicht an Dritte weitergibt. Rechtswirksamkeit:
          Dieser Haftungsausschluss ist Teil des Internetangebotes des
          infocafes. Sofern einzelne Formulierungen oder Teile dieses Textes der
          geltenden Rechtslage nicht mehr oder nicht mehr vollständig
          entsprechen, bleiben die übrigen Teile dieser Erklärung davon
          unberührt.
        </p>{" "}
      </div>
    </>
  );
};
