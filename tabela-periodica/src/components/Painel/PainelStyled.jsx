import styled from "styled-components";

export const BackgroundPainel = styled.div`
  width: 1380px;
  height: 750px;

  background-color: #fff;
  border-radius: 20px;
  padding: 40px 20px;
  flex-wrap: wrap;
  gap: 10px;

  display: flex;

  #line1,
  #line2,
  #line3 {
    height: 515px;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  #midle {
    height: 515px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
  }
  #painelElement {
    width: 590px;
    height: 180px;
    border-radius: 20px;
    background: linear-gradient(158deg, #f2b705 8.27%, #f29f05 85.38%);
  }
  #square1 {
    width: 740px;

    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  #right {
    height: 515px;
    display: flex;
    flex-direction: column;
  }
  #header input {
    width: 290px;
    height: 30px;
    margin-top: 17px;
  }
  #painelRight {
    height: 440px;
    width: 365px;

    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;
  }
  #footerElments {
    display: flex;
    flex-wrap: wrap;
    gap: 10px
  }
`;
