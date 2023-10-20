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
          <Element category="TransitionMetals" number="21" symbol="Sc" />
          <Element category="TransitionMetals" number="22" symbol="Ti" />
          <Element category="TransitionMetals" number="23" symbol="V" />
          <Element category="TransitionMetals" number="24" symbol="Cr" />
          <Element category="TransitionMetals" number="25" symbol="Mn" />
          <Element category="TransitionMetals" number="26" symbol="Fe" />
          <Element category="TransitionMetals" number="27" symbol="Co" />
          <Element category="TransitionMetals" number="28" symbol="Ni" />
          <Element category="TransitionMetals" number="29" symbol="Cu" />
          <Element category="TransitionMetals" number="30" symbol="Zn" />
          <Element category="TransitionMetals" number="39" symbol="Y" />
          <Element category="TransitionMetals" number="40" symbol="Zr" />
          <Element category="TransitionMetals" number="41" symbol="Nb" />
          <Element category="TransitionMetals" number="42" symbol="Mo" />
          <Element category="TransitionMetals" number="43" symbol="Tc" />
          <Element category="TransitionMetals" number="44" symbol="Ru" />
          <Element category="TransitionMetals" number="45" symbol="Rh" />
          <Element category="TransitionMetals" number="46" symbol="Pd" />
          <Element category="TransitionMetals" number="47" symbol="Ag" />
          <Element category="TransitionMetals" number="48" symbol="Cd" />
          <Element category="noCategory" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="72" symbol="Hf" />
          <Element category="TransitionMetals" number="73" symbol="Ta" />
          <Element category="TransitionMetals" number="74" symbol="W" />
          <Element category="TransitionMetals" number="75" symbol="Re" />
          <Element category="TransitionMetals" number="76" symbol="Os" />
          <Element category="TransitionMetals" number="77" symbol="Ir" />
          <Element category="TransitionMetals" number="78" symbol="Pt" />
          <Element category="TransitionMetals" number="79" symbol="Au" />
          <Element category="TransitionMetals" number="80" symbol="Hg" />
          <Element category="noCategory" number="4" symbol="Be" />
          <Element category="TransitionMetals" number="104" symbol="Rf" />
          <Element category="TransitionMetals" number="105" symbol="Db" />
          <Element category="TransitionMetals" number="106" symbol="Sg" />
          <Element category="TransitionMetals" number="107" symbol="Bh" />
          <Element category="TransitionMetals" number="108" symbol="Hs" />
          <Element category="TransitionMetals" number="109" symbol="Mt" />
          <Element category="TransitionMetals" number="110" symbol="Ds" />
          <Element category="TransitionMetals" number="111" symbol="Rg" />
          <Element category="TransitionMetals" number="112" symbol="Cn" />
        </div>
      </div>
      <div id="right">
        <div id="header">
          <input type="text" />
        </div>
        <div id="painelRight">
          <Element category="Semimetals" number="5" symbol="Be" />
          <Element category="notMetal" number="6" symbol="Mg" />
          <Element category="notMetal" number="7" symbol="Ca" />
          <Element category="notMetal" number="8" symbol="Sr" />
          <Element category="Halogens" number="9" symbol="Ba" />
          <Element category="OtherMetals" number="13" symbol="Ra" />
          <Element category="Semimetals" number="14" symbol="Ra" />
          <Element category="notMetal" number="15" symbol="Ra" />
          <Element category="notMetal" number="16" symbol="Ra" />
          <Element category="TransitionMetals" number="17" symbol="Ra" />
          <Element category="TransitionMetals" number="31" symbol="Be" />
          <Element category="TransitionMetals" number="32" symbol="Mg" />
          <Element category="TransitionMetals" number="33" symbol="Ca" />
          <Element category="TransitionMetals" number="34" symbol="Sr" />
          <Element category="TransitionMetals" number="35" symbol="Ba" />
          <Element category="TransitionMetals" number="49" symbol="Ra" />
          <Element category="TransitionMetals" number="50" symbol="Ra" />
          <Element category="TransitionMetals" number="51" symbol="Ra" />
          <Element category="TransitionMetals" number="52" symbol="Ra" />
          <Element category="TransitionMetals" number="53" symbol="Ra" />
          <Element category="TransitionMetals" number="81" symbol="Be" />
          <Element category="TransitionMetals" number="82" symbol="Mg" />
          <Element category="TransitionMetals" number="83" symbol="Ca" />
          <Element category="TransitionMetals" number="84" symbol="Sr" />
          <Element category="TransitionMetals" number="85" symbol="Ba" />
          <Element category="TransitionMetals" number="113" symbol="Ra" />
          <Element category="TransitionMetals" number="114" symbol="Ra" />
          <Element category="TransitionMetals" number="115" symbol="Ra" />
          <Element category="TransitionMetals" number="116" symbol="Ra" />
          <Element category="TransitionMetals" number="117" symbol="Ra" />
        </div>
      </div>
      <div id="line3">
        <Element category="TransitionMetals" number="38" symbol="Sr" />
        <Element category="TransitionMetals" number="56" symbol="Ba" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
      </div>
      <div id="footerElments">
        <Element category="noCategory" number="38" symbol="Sr" />
        <Element category="noCategory" number="56" symbol="Ba" />
        <Element category="noCategory" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="noCategory" number="38" symbol="Sr" />
        <Element category="noCategory" number="56" symbol="Ba" />
        <Element category="noCategory" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
        <Element category="TransitionMetals" number="88" symbol="Ra" />
      </div>
    </BackgroundPainel>
  );
};

export default Painel;
