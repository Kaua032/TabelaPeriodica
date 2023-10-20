import React from "react";
import Element from "../Element/Element.jsx";
import { BackgroundPainel } from "./PainelStyled.jsx";

const Painel = () => {
  return (
  <BackgroundPainel>
    <Element category='notMetal' number='1' symbol='H' />   
    <Element category='alkaliMetals' number='1' symbol='H' />   
    <Element category='AlkalineEarthMetals' number='1' symbol='H' />   
  </BackgroundPainel>);
};

export default Painel;
