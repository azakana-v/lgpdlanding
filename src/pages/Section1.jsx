import React from "react";
import styled from "styled-components";
import GradeBg from "../assets/grade.png";
import FundoProps from "../assets/fundoRoxo.svg";
import Computer from "../assets/Computer.png";
import LogoAzul from "../assets/LogoAzul.png";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${FundoProps});
  background-repeat: no-repeat;
  background-size: cover;
`;
const PropsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: white; */
  background-image: url(${GradeBg});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 100%;
`;
const LogoAzulProp = styled.img`
  top: 5vh;
  left: 20vw;
  position: absolute;
  @media (max-width: 700px) {
    left: 29vw;
  }
`;
const MainContent = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: 700px) {
    width: 95%;
    flex-direction: column-reverse;
    padding: 7rem 0rem;
    width: 100%;
  }
`;
const LeftColumn = styled.div`
  flex: 1;
  @media (max-width: 700px) {
    flex: 2;
    width: 80%;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  @media (max-width: 700px) {
    width: 80%;
  }
`;
const MainTittle = styled.h1`
  color: #150442;
  strong {
    color: #be00ff;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
const SubTittle = styled.h2`
  font-size: 1rem;
  width: 70%;
  @media (max-width: 700px) {
    width: 90%;
    font-size: 0.9rem;
    font-weight: 800;
  }
`;
const ComputerIMG = styled.img`
  width: 100%;
  max-width: 450px;

  @media (max-width: 700px) {
    margin: 0 auto;
    position: relative;
    /* right: 40px; */
    max-width: 400px;
    flex-direction: column-reverse;
  }
  @media (max-width: 500px) {
    margin: 0 auto;
    position: relative;
    /* right: 40px; */
    max-width: 280px;
    flex-direction: column-reverse;
  }
`;

const Section1 = () => {
  return (
    <MainContainer>
      <PropsContainer>
        <MainContent>
          <LeftColumn>
            <MainTittle>
              ENQUADRAMENTO À <strong>LEI LGPD</strong> DE FORMA RÁPIDA,
              EDUCACIONAL E DESCOMPLICADA!
            </MainTittle>
            <SubTittle>
              Aumente o faturamento da sua contabilidade Através do
              Enquadramento LGPD e aprenda uma das formações mais escassas do
              mercado!
            </SubTittle>
          </LeftColumn>
          <RightColumn>
            <ComputerIMG src={Computer}></ComputerIMG>
          </RightColumn>
        </MainContent>
        <LogoAzulProp src={LogoAzul} />
      </PropsContainer>
    </MainContainer>
  );
};

export default Section1;
