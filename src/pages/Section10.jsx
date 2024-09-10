import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  width: 50vw;
  margin: 4rem auto;
  @media (max-width: 700px) {
    width: 80vw;
    grid-template-columns: 1fr;
    margin: 4rem auto;
  }
`;
const Text1Container = styled.div`
  color: #150442;
  font-size: 4rem;
  strong {
    color: #8500b2;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`;
const Text2Container = styled.div`
  font-size: 1rem;
  p {
    font-family: "Montserrat";
    font-weight: 600;
  }
`;

const BeErri = styled.br`
  @media (max-width: 700px) {
    display: none;
  }
`;
const Section10 = () => {
  return (
    <Container>
      <Text1Container>
        <span>SOBRE A </span>
        <BeErri />
        <strong>
          <span>LGPD LOCK</span>
        </strong>
      </Text1Container>
      <Text2Container>
        <p>
          A LGPD LOCK é uma empresa de tecnologia fundada em 2022, líder em
          soluções voltadas para Lei Geral De Proteção de Dados e chefiada pela
          advogada Joana Faccini Salaverry.
        </p>

        <p>
          Joana é especializada em Direito Digital, MBA em Segurança da
          Informação e certificado internacional de DPO (encarregada de proteção
          de dados), pela EXIN.
        </p>

        <p>Auditora Líder ISO 37001 / ISO 27001 e ISO 27701.</p>
      </Text2Container>
    </Container>
  );
};

export default Section10;
