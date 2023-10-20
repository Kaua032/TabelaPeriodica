import styled from "styled-components";

export const ElementBackground = styled.div`
  width: 65px;
  height: 65px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
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
`;
