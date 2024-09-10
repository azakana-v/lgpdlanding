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

const TextContainer = styled.div``;

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
          <CardTitle>Módulo 1:</CardTitle>
          <Text>Aula 1 - Violação De Dados</Text>
          <Text>Aula 2 - LGPD no Dia a Dia do Contador</Text>
          <Text>Aula 3 - Adequação a serventia Notarial à LGPD</Text>
          <Text>Aula 4 - Como Responder aos Direitos dos Titulares</Text>
        </TextContainer>
        <Image></Image>
      </Card>
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
          <CardTitle>Módulo 1:</CardTitle>
          <Text>Aula 1 - Violação De Dados</Text>
          <Text>Aula 2 - LGPD no Dia a Dia do Contador</Text>
          <Text>Aula 3 - Adequação a serventia Notarial à LGPD</Text>
          <Text>Aula 4 - Como Responder aos Direitos dos Titulares</Text>
        </TextContainer>
        <Image></Image>
      </Card>
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
    </Container>
  );
};

export default Section7;
