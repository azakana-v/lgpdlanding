import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* min-height: 100vh; */
  width: 60vw;
  margin: 5rem auto;
  font-family: "Montserrat", "sans-serif";
  color: #5b0390;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 150px;
  }
  @media (max-width: 700px) {
    width: 80vw;
  }
`;
const Header = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const FaqsContainers = styled.div`
  display: flex;
  /* justify-content: space-around; */
  gap: 100px;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0px;
  }
`;

const FaqComponent = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const QuestionContainer = styled.div`
  /* padding-bottom: 10px; */
  /* margin-bottom: 20px; */
  cursor: pointer;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Question = styled.p`
  margin: 1rem 0;
  font-size: 28px;
  font-weight: 500;
  background-color: #8500b2;
  border-radius: 13px;
  padding: 1.5rem;
  color: white;
  width: 100%;
  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const AnswerContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
  margin-left: 5px;
  animation: expand 0.5s forwards;
  @keyframes expand {
    0% {
      height: 0px;
      color: transparent;
    }
    100% {
      height: 100px;
      color: white;
    }
  }

  @keyframes deexpand {
  }
`;

const Answer = styled.p`
  background-color: #5b0390;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
`;

const CtaButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  padding: 15px 25px;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  background: rgb(91, 3, 144);
  background: linear-gradient(
    180deg,
    rgba(91, 3, 144, 1) 0%,
    rgba(21, 4, 66, 1) 100%
  );
  color: white;
  font-family: "Montserrat", "sans-serif";
  font-weight: 600;
  font-size: 20px;
  transition: 0.3s;
  &:hover {
    scale: 1.03;
  }
  margin-top: 110px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const SVGContainer = styled.div`
  width: 100vw;
`;

const Section12 = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  return (
    <MainContainer>
      <Header>PERGUNTAS FREQUENTES</Header>
      <FaqsContainers>
        <FaqComponent>
          <QuestionContainer
            onClick={() => {
              setClicked1(!clicked1);
            }}
          >
            <Question>O LGPD LOCK funciona em todos os dispositivos?</Question>
          </QuestionContainer>
          {clicked1 ? (
            <AnswerContainer>
              <Answer>
                Proteja seus ativos mais críticos através de estruturas robustas
                que reduzem significativamente o risco de vazamentos de dados,
                garantindo a integridade e a confidencialidade das informações.
              </Answer>
            </AnswerContainer>
          ) : (
            ""
          )}
          <QuestionContainer
            onClick={() => {
              setClicked2(!clicked2);
            }}
          >
            <Question>Como o LGPD LOCK me ajuda?</Question>
          </QuestionContainer>
          {clicked2 ? (
            <AnswerContainer>
              <Answer>
                Eleve a percepção de sua marca no mercado. A certificação ISO
                27001 é um selo de confiança que mostra compromisso com a
                segurança, atraindo clientes e parceiros que valorizam altos
                padrões.
              </Answer>
            </AnswerContainer>
          ) : (
            ""
          )}
          <QuestionContainer
            onClick={() => {
              setClicked3(!clicked3);
            }}
          >
            <Question>
              É necessário ter conhecimento prévio sobre a LGPD?
            </Question>
          </QuestionContainer>
          {clicked3 ? (
            <AnswerContainer>
              <Answer>
                Assegure-se de que sua empresa esteja em conformidade com as
                mais exigentes normas legais e regulatórias, evitando
                penalidades e multas que podem afetar financeiramente e no
                mercado.
              </Answer>
            </AnswerContainer>
          ) : (
            ""
          )}
        </FaqComponent>
      </FaqsContainers>
    </MainContainer>
  );
};

export default Section12;
