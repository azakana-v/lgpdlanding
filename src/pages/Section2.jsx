import React from "react";
import styled from "styled-components";
import fundoImg from "../assets/FundoSection2.png";
import BallImg from "../assets/Ball.png";
import FundoCard from "../assets/FundoCard.png";
import FundoCard2 from "../assets/Fundo2.png";

const MainContainer = styled.div`
  width: 100vw;
  height: 110vh;
  background-image: url(${fundoImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -5rem;

  @media (max-width: 700px) {
    top: -3.5rem;
    /* background-color: #320e56; */
    background-image: url(${FundoCard2});
    background-position: top;
    height: auto;
  }
`;
const BallProp1 = styled.div`
  background-image: url(${BallImg});
  position: absolute;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  left: 10vw;
  top: -1rem;
`;
const BallProp2 = styled.div`
  background-image: url(${BallImg});
  position: absolute;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  left: 35vw;
  top: -1rem;
  @media (max-width: 700px) {
    display: none;
  }
`;
const BallProp3 = styled.div`
  background-image: url(${BallImg});
  position: absolute;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  left: 55vw;
  top: 2.4rem;
  @media (max-width: 700px) {
    display: none;
  }
`;
const BallProp4 = styled.div`
  background-image: url(${BallImg});
  position: absolute;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  left: 80vw;
  top: 2.4rem;
  @media (max-width: 700px) {
    top: 1.7rem;
  }
`;

const MainContent = styled.div`
  width: 65%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: 700px) {
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 1rem 3rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 100px 0;
  }
`;

const Card = styled.div`
  padding: 1rem;
  width: 100%;
  height: 200px; //teste
  /* background-color: red; */
  border-radius: 20px;
  background-image: url(${FundoCard});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 700px) {
    height: 270px; //teste
  }
`;

const CardTextContainer = styled.div`
  max-width: 90%;
  display: flex;
  @media (max-width: 700px) {
    max-width: 95%;
  }
`;
const CardTittle = styled.h3`
  margin-left: 1rem;
`;
const CardImg = styled.img`
  min-width: 100px;
  min-height: 100px;
  max-height: 100px;
  max-width: 100px;
  border-radius: 50%;
  background-color: #8500b2;
`;
const CardText = styled.p`
  color: #000000;
  font-weight: 700;
  font-size: 0.9rem;
`;

const Section2 = () => {
  return (
    <MainContainer>
      <BallProp1 />
      <BallProp2 />
      <BallProp3 />
      <BallProp4 />

      <MainContent>
        <CardsContainer>
          <Card>
            <CardTextContainer>
              <CardImg />
              <CardTittle>PLATAFORMA INTUITIVA E GAMIFICADA</CardTittle>
            </CardTextContainer>
            <CardText>
              O LGPD LOCK funciona de maneira intuitiva e gamificada, através de
              um termômetro que mede a conclusão do enquadramento dos seus
              clientes de acordo com o preenchimento das etapas.
            </CardText>
          </Card>
          <Card>
            <CardTextContainer>
              <CardImg />
              <CardTittle>REPUTAÇÃO DO NEGÓCIO DO CLIENTE</CardTittle>
            </CardTextContainer>
            <CardText>
              A Lei Geral Da Proteção De Dados está em vigor desde 2022. Desde
              então, todas as empresas no Brasil devem segui-lá, porém,
              estima-se que menos de 30% das mesmas já estão enquadradas. Além
              disso, a multa por não enquadramento pode chegar a até 50 milhões
              de reais ou 2% do faturamento anual.
            </CardText>
          </Card>
          <Card>
            <CardTextContainer>
              <CardImg />
              <CardTittle>TREINAMENTO LGPD</CardTittle>
            </CardTextContainer>
            <CardText>
              Aprenda do absoluto 0 sobre o enquadramento LGPD, através de um
              treinamento que trata das normativas da Lei Geral De Proteção De
              Dados. Essa preparação capacitará você a tornar-se o principal
              responsável pelo novo setor das empresas, cujo os salários dos
              profissionais em DPO (Data Protection Officer) podem chegar a 19
              mil reais devido à escassez no mercado.
            </CardText>
          </Card>
          <Card>
            <CardTextContainer>
              <CardImg />
              <CardTittle>CHECKLIST LGPD</CardTittle>
            </CardTextContainer>
            <CardText>
              O checklist LGPD é a principal ferramenta  para coletar e
              organizar as informações que os seus clientes precisam enviar
              durante o processo de enquadramento LGPD. Além disso, o checklist
              é subdividido em etapas do processo, para que tudo fique ainda
              mais simples.
            </CardText>
          </Card>
        </CardsContainer>
      </MainContent>
    </MainContainer>
  );
};

export default Section2;
