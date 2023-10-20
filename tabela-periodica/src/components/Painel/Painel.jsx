import React from "react";
import Element from "../Element/Element.jsx";
import { BackgroundPainel } from "./PainelStyled.jsx";

const Painel = () => {
  return (
    <BackgroundPainel>
      <div id="line1">
        <Element category="notMetal" number="1" symbol="H" />
        <Element category="alkaliMetals" number="3" symbol="Li" />
        <Element category="alkaliMetals" number="11" symbol="Na" />
        <Element category="alkaliMetals" number="19" symbol="K" />
        <Element category="alkaliMetals" number="37" symbol="Rb" />
        <Element category="alkaliMetals" number="55" symbol="Cs" />
        <Element category="alkaliMetals" number="87" symbol="Fr" />
      </div>
      <div id="line2">
        <Element category="noCategory" />
        <Element category="AlkalineEarthMetals" number="4" symbol="Be" />
        <Element category="AlkalineEarthMetals" number="12" symbol="Mg" />
        <Element category="AlkalineEarthMetals" number="20" symbol="Ca" />
        <Element category="AlkalineEarthMetals" number="38" symbol="Sr" />
        <Element category="AlkalineEarthMetals" number="56" symbol="Ba" />
        <Element category="AlkalineEarthMetals" number="88" symbol="Ra" />
      </div>
      <div id="midle">
        <div id="painelElement"></div>
        <div id="square1">
          <Element category="TransitionMetals" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="12" symbol="Mg" />
          <Element category="TransitionMetals" number="20" symbol="Ca" />
          <Element category="TransitionMetals" number="38" symbol="Sr" />
          <Element category="TransitionMetals" number="56" symbol="Ba" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="12" symbol="Mg" />
          <Element category="TransitionMetals" number="20" symbol="Ca" />
          <Element category="TransitionMetals" number="38" symbol="Sr" />
          <Element category="TransitionMetals" number="56" symbol="Ba" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="noCategory" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="12" symbol="Mg" />
          <Element category="TransitionMetals" number="20" symbol="Ca" />
          <Element category="TransitionMetals" number="38" symbol="Sr" />
          <Element category="TransitionMetals" number="56" symbol="Ba" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="noCategory" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="12" symbol="Mg" />
          <Element category="TransitionMetals" number="20" symbol="Ca" />
          <Element category="TransitionMetals" number="38" symbol="Sr" />
          <Element category="TransitionMetals" number="56" symbol="Ba" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
        </div>
      </div>
      <div id="right">
        <div id="header">
          <input type="text" />
        </div>
        <div id="painelRight">
          <Element category="TransitionMetals" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="12" symbol="Mg" />
          <Element category="TransitionMetals" number="20" symbol="Ca" />
          <Element category="TransitionMetals" number="38" symbol="Sr" />
          <Element category="TransitionMetals" number="56" symbol="Ba" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="12" symbol="Mg" />
          <Element category="TransitionMetals" number="20" symbol="Ca" />
          <Element category="TransitionMetals" number="38" symbol="Sr" />
          <Element category="TransitionMetals" number="56" symbol="Ba" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="12" symbol="Mg" />
          <Element category="TransitionMetals" number="20" symbol="Ca" />
          <Element category="TransitionMetals" number="38" symbol="Sr" />
          <Element category="TransitionMetals" number="56" symbol="Ba" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
          <Element category="TransitionMetals" number="88" symbol="Ra" />
        </div>
      </div>
      <div id="line3"></div>
    </BackgroundPainel>
  );
};

export default Painel;
