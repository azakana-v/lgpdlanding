import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin-top: 5rem;
`;

const Card = styled.div`
  display: flex;
  width: 60%;
  background-color: #8500b2;
  margin: 1.5rem auto;
  color: white;
  padding: 4rem 3rem;
  border-radius: 27px;
  justify-content: space-between;
  flex-direction: ${(props) => {
    return props.reverse ? "row-reverse" : "row";
  }};

  background-color: ${(props) => {
    return props.reverse ? "#320E56" : "#8500b2";
  }};

  @media (max-width: 700px) {
    width: 80%;
    flex-direction: column-reverse;
    padding: 4rem 1rem;
  }
`;

const TextContainer = styled.div`
  margin-left: 1rem;
`;

const Image = styled.div`
  width: 52%;
  background-color: white;
  border-radius: 27px;
  @media (max-width: 700px) {
    width: 100%;
    height: 350px;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
`;

const Text = styled.p`
  font-family: "Montserrat";
`;

const Section7 = () => {
  return (
    <Container>
      <Card>
        <TextContainer>
          <CardTitle>Módulo 1:</CardTitle>
          <Text>Aula 1 - Violação De Dados</Text>
          <Text>Aula 2 - LGPD no Dia a Dia do Contador</Text>
          <Text>Aula 3 - Adequação a serventia Notarial à LGPD</Text>
          <Text>Aula 4 - Como Responder aos Direitos dos Titulares</Text>
        </TextContainer>
        <Image></Image>
      </Card>
      <Card reverse>
        <TextContainer>
          <CardTitle>Módulo 2:</CardTitle>
          <Text>Aula 1 - Cuidados ao Coletar Dados Pessoais</Text>
          <Text>Aula 2 - Relatório De Impacto Cartório</Text>
          <Text>Aula 3 - Mapeamento De Dados</Text>
          <Text>Aula 4 - Governança Do Tratamento De Dados Pessoais</Text>
        </TextContainer>
        <Image></Image>
      </Card>
      <Card>
        <TextContainer>
          <CardTitle>Módulo 3:</CardTitle>
          <Text>Aula 1 - Tabela De Temporalidade e Descarte</Text>
          <Text>Aula 2 - Bases Legais</Text>
          <Text>Aula 3 - Gestão De Risco</Text>
          <Text>Aula 4 - Gestão De Incidentes Da Segurança da Informação</Text>
        </TextContainer>
        <Image></Image>
      </Card>
      <Card reverse>
        <TextContainer>
          <CardTitle>Módulo 4:</CardTitle>
          <Text>Aula 1 - ANPD</Text>
          <Text>Aula 2 - Ameaça e Risco</Text>
          <Text>Aula 3 - Aspectos de Confiabilidade</Text>
          <Text>Aula 4 - Estrutura da LGPD e Alguns Conceitos na Prática</Text>
        </TextContainer>
        <Image></Image>
      </Card>
      <Card>
        <TextContainer>
          <CardTitle>Módulo 5:</CardTitle>
          <Text>Aula 1 - Incidente de Segurança</Text>
          <Text>Aula 2 - Valor Dos Dados Para a Empresa</Text>
          <Text>Aula 3 - Principais Conceitos LGPD</Text>
          <Text>Aula 4 - Conscientização LGPD</Text>
        </TextContainer>
        <Image></Image>
      </Card>
    </Container>
  );
};

export default Section7;
