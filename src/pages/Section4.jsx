import React from "react";
import styled from "styled-components";
import PropRect from "../assets/PropRect.png";
import Velocimeter from "../assets/Velocimeter.png";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* height: 100vh; */
  position: relative;
  /* background-color: #dee4e4; */
  display: grid;
  grid-template-columns: 13% 74% 13%;
  margin-top: 7rem;
  @media (max-width: 700px) {
    height: auto;
    font-size: 0.8rem;
    grid-template-columns: 1fr;
  }
`;

const GhostDiv = styled.div`
  width: 100%;
  background-image: url(${PropRect});
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 700px) {
    display: none;
  }
`;
const MainContent = styled.div`
  margin: 0 2rem;
  margin-top: 3rem;
  @media (max-width: 700px) {
    margin: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    justify-content: initial;
    /* align-items: initial; */
    flex-direction: column-reverse;
  }
`;
const HeaderText = styled.div`
  flex: 1;
  max-width: 40%;
  @media (max-width: 700px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;
const HeaderSubTitle = styled.h4`
  color: #150442;
  margin: 0;
  font-size: 2rem;
`;
const HeaderTitle = styled.h3`
  color: #8500b2;
  margin: 0;
  font-size: 11rem;
`;
const HeaderImg = styled.img`
  width: 50%;
  flex: 1;
  border-bottom: 4px solid #671683;
  @media (max-width: 700px) {
    width: 100vw;
    /* min-height: 200px; */
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const Card = styled.div``;
const CardTitleContainer = styled.h3`
  display: flex;
`;
const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #8500b2;
`;
const CardTitle = styled.h3`
  color: #000000;
  margin-left: 1rem;
`;
const CardText = styled.p`
  font-size: 1.2rem;
`;

const Section4 = () => {
  return (
    <MainContainer>
      <GhostDiv></GhostDiv>
      <MainContent>
        <Header>
          <HeaderText>
            <HeaderSubTitle>ETAPAS DO TERMÔMETRO</HeaderSubTitle>
            <HeaderTitle>LGPD</HeaderTitle>
          </HeaderText>
          <HeaderImg src={Velocimeter}></HeaderImg>
        </Header>

        <Content>
          <Card>
            <CardTitleContainer>
              <CardIcon />
              <CardTitle>Mapeamento De Dados</CardTitle>
            </CardTitleContainer>
            <CardText>
              O mapeamento de dados é o processo de identificar, documentar e
              entender todos os fluxos de dados dentro da empresa. Isso inclui
              onde os dados pessoais são coletados, armazenados, processados e
              compartilhados..
            </CardText>
          </Card>
          <Card>
            <CardTitleContainer>
              <CardIcon />
              <CardTitle>Tabela De Descartes</CardTitle>
            </CardTitleContainer>
            <CardText>
              A tabela de descartes é um guia que define quando e como os dados
              pessoais devem ser descartados após o término de sua utilidade.
              Isso pode incluir a exclusão segura de dados digitais e a
              destruição de documentos físicos.
            </CardText>
          </Card>
          <Card>
            <CardTitleContainer>
              <CardIcon />
              <CardTitle>Matriz De Risco</CardTitle>
            </CardTitleContainer>
            <CardText>
              A matriz de risco é uma ferramenta que ajuda a identificar e
              avaliar os riscos associados ao tratamento de dados pessoais
              dentro da empresa. Ela analisa a probabilidade e o impacto de
              diferentes tipos de incidentes, como vazamentos de dados ou acesso
              não autorizado.
            </CardText>
          </Card>
          <Card>
            <CardTitleContainer>
              <CardIcon />
              <CardTitle>Relatório De Impactos</CardTitle>
            </CardTitleContainer>
            <CardText>
              Essa etapa envolve a criação e implementação de políticas que
              definem como a empresa protege os dados pessoais que coleta e
              processa. Isso inclui políticas de acesso, criptografia, backup e
              respostas a incidentes.
            </CardText>
          </Card>
          <Card>
            <CardTitleContainer>
              <CardIcon />
              <CardTitle>Aditivo de Contrato</CardTitle>
            </CardTitleContainer>
            <CardText>
              Essa etapa envolve a criação de aditivos contratuais que são
              incorporados aos contratos de trabalho e contratos com operadores
              de dados (terceiros que processam dados pessoais em nome da
              empresa). Esses aditivos especificam as obrigações de conformidade
              com a LGPD..
            </CardText>
          </Card>
        </Content>
      </MainContent>
      <GhostDiv style={{ transform: "rotate(180deg)" }}></GhostDiv>
    </MainContainer>
  );
};

export default Section4;
