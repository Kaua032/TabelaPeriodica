import styled from "styled-components";

export const ElementBackground = styled.div`
  width: 65px;
  height: 65px;

  display: inline-block;
  cursor: ${(props) => props.category === 'noCategory' ? 'auto' : 'pointer'};

  color: #fff;
  background: ${(props) =>
    props.category === "notMetal"
      ? "linear-gradient(142deg, #72C754 16.53%, #1E6206 86.51%);"
      : props.category === "alkaliMetals"
      ? "linear-gradient(158deg, #D35400 8.27%, #963C00 85.38%);"
      : props.category === "AlkalineEarthMetals"
      ? "linear-gradient(158deg, #F2B705 8.27%, #F29F05 85.38%);"
      : props.category === "TransitionMetals"
      ? "linear-gradient(158deg, #BF3C68 8.27%, #7F2845 85.38%)"
      : props.category === "OtherMetals"
      ? "linear-gradient(158deg, #7BB1DC 8.27%, #3B6E96 85.38%)"
      : props.category === "Semimetals"
      ? "linear-gradient(158deg, #1B8C57 8.27%, #0C492D 85.38%)"
      : props.category === "Halogens"
      ? "linear-gradient(158deg, #3FCEF6 8.27%, #439DB6 85.38%)"
      : props.category === "NobleGases"
      ? "linear-gradient(158deg, #294ED2 8.27%, #132979 85.38%)"
      : props.category === "Lanthanides"
      ? "linear-gradient(158deg, #27F3DE 8.27%, #14887C 85.38%)"
      : props.category === "Actinidia"
      ? "linear-gradient(158deg, #FF93DA 8.27%, #B9679D 85.38%)"
      : "none"};

  padding: 5px 5px 0px 5px;
  border-radius: 10px;

  h2 {
    color: #fff;

    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    align-self: start;
    justify-self: start;
    position: fixed;
  }
  h3 {
    color: #fff;

    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 11px;
  }
`;
