import React from "react";
import styled from "styled-components";
import CorrectIconImg from "../assets/CorrectIcon.png";

const MainContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContent = styled.div`
  width: 60%;
  /* height: 90vh; */
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

const FirstColumn = styled.div`
  max-height: 100%;
  border: 3px solid #8500b2;
  border-radius: 2rem;
  padding: 2rem;
  max-width: 100%;
`;
const SecondColumn = styled.div`
  max-width: 100%;
  max-height: 100%;
  border: 3px solid #8500b2;
  padding: 2rem;
  border-radius: 2rem;
`;
const ColumnTitle = styled.h3`
  font-size: 3rem;
  color: #8500b2;
  margin: 1rem 0;
`;

const ColumnPointsContainer = styled.div`
  width: flex;
`;

const Point = styled.div`
  display: flex;
  margin: 1rem 0;
  font-weight: 500;
`;
const CorrectIcon = styled.div`
  background-image: url(${CorrectIconImg});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
`;
const CorrectText = styled.span`
  margin-left: 0.5rem;
  font-family: "Montserrat";
`;

const ColumnPrinceMainContainer = styled.div`
  background-color: ${(props) => {
    return props.dark ? "#8500B2" : "";
  }};

  border-radius: ${(props) => {
    return props.dark ? "21px" : "";
  }};

  padding: ${(props) => {
    return props.dark ? "1rem" : "";
  }};

  * {
    color: ${(props) => {
      return props.dark ? "white !important" : "";
    }};
    font-family: "Krona One", sans-serif;
  }

  margin-top: 2rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const ColumnPriceContainer = styled.div`
  display: flex;
  min-width: 100%;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const ColumnPrinceIndex = styled.div`
  font-size: 1.8rem;
  color: #8500b2;
  strong {
    color: black;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
const ColumnPrice = styled.span`
  font-size: 2.5vw;
  position: relative;
  top: 22px;
  color: #8500b2;
  @media (max-width: 700px) {
    font-size: 3rem;
    top: -15px;
    grid-template-columns: 1fr;
  }
`;
const ColumnPriceObs = styled.span`
  font-weight: 500;
  font-family: "Krona One", sans-serif;
`;

const CtaContainer = styled.div`
  background-color: #8500b2;
  border-radius: 1rem;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  position: relative;
  top: 55px;
`;
const CtaButton = styled.a`
  width: 100%;
  color: white;
  text-decoration: none;
  font-size: 3rem;
  text-align: center;
`;

const Section3 = () => {
  return (
    <MainContainer>
      <MainContent>
        <FirstColumn>
          <ColumnTitle>PLANO STARTER</ColumnTitle>
          <ColumnPointsContainer>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Plataforma LGPD LOCK</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Checklist LGPD</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Formação LGPD</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Suporte Técnico</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Garantia De 7 Dias</CorrectText>
            </Point>
          </ColumnPointsContainer>

          <ColumnPrinceMainContainer>
            <ColumnPriceContainer>
              <ColumnPrinceIndex>
                <strong>DE</strong> <br />
                R$:
              </ColumnPrinceIndex>
              <ColumnPrice>970,00</ColumnPrice>
            </ColumnPriceContainer>
            <ColumnPriceObs>
              De Implementação <br />+ Tx. Mensal: R$97 P/ 1 USUÁRIO
            </ColumnPriceObs>
          </ColumnPrinceMainContainer>

          <ColumnPrinceMainContainer dark>
            <ColumnPriceContainer>
              <ColumnPrinceIndex>
                <strong>POR</strong> <br />
                R$:
              </ColumnPrinceIndex>
              <ColumnPrice>0,00</ColumnPrice>
            </ColumnPriceContainer>
            <ColumnPriceObs>
              De Implementação <br />+ Tx. Mensal: R$97 P/ 1 USUÁRIO
            </ColumnPriceObs>
          </ColumnPrinceMainContainer>
          <CtaContainer>
            <CtaButton>COMPRAR</CtaButton>
          </CtaContainer>
        </FirstColumn>
        <SecondColumn>
          {" "}
          <ColumnTitle>PLANO BUSINESS</ColumnTitle>
          <ColumnPointsContainer>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Plataforma LGPD LOCK</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Checklist LGPD</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Formação LGPD</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Suporte Técnico</CorrectText>
            </Point>
            <Point>
              <CorrectIcon></CorrectIcon>
              <CorrectText>Garantia De 7 Dias</CorrectText>
            </Point>
          </ColumnPointsContainer>
          <ColumnPrinceMainContainer>
            <ColumnPriceContainer>
              <ColumnPrinceIndex>
                <strong>DE</strong> <br />
                R$:
              </ColumnPrinceIndex>
              <ColumnPrice>970,00</ColumnPrice>
            </ColumnPriceContainer>
            <ColumnPriceObs>
              De Implementação <br />+ Tx. Mensal: R$97 P/ 1 USUÁRIO
            </ColumnPriceObs>
          </ColumnPrinceMainContainer>
          <ColumnPrinceMainContainer dark>
            <ColumnPriceContainer>
              <ColumnPrinceIndex>
                <strong>POR</strong> <br />
                R$:
              </ColumnPrinceIndex>
              <ColumnPrice>0,00</ColumnPrice>
            </ColumnPriceContainer>
            <ColumnPriceObs>
              De Implementação <br />+ Tx. Mensal: R$97 P/ 1 USUÁRIO
            </ColumnPriceObs>
          </ColumnPrinceMainContainer>
          <CtaContainer>
            <CtaButton>COMPRAR</CtaButton>
          </CtaContainer>
        </SecondColumn>
      </MainContent>
    </MainContainer>
  );
};

export default Section3;
