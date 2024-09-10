import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;
const MainContent = styled.div`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 700px) {
    width: 100vw;
    grid-template-columns: 1fr;
  }
`;

const TextSection1 = styled.div``;
const TextTitle1 = styled.h3`
  color: #8500b2;
  font-size: 2rem;
  @media (max-width: 700px) {
    text-align: center;
  }
`;
const Text = styled.p`
  font-family: "Montserrat";
  @media (max-width: 700px) {
    text-align: center;
    font-weight: 700;
  }
`;

const TextContainer = styled.div`
  display: flex;

  border-left: 2px solid #8500b2;
  padding-left: 2rem;
  margin-left: 2rem;
  align-items: center;
  p {
    font-family: "Montserrat";
    font-weight: 600;
    margin-left: 2rem;
  }

  @media (max-width: 700px) {
    width: 90%;
    /* margin-left: 0rem; */
    margin: 0 auto;
    border-left: none;
    padding-left: 0rem;
    flex-direction: column;
    text-align: center;
    font-weight: 700;
    p {
      margin-left: 0rem;
    }
  }
`;

const BigNumber = styled.span`
  font-size: 9rem;
  position: relative;
  top: -10px;
  color: #8500b2;
`;

const BigText = styled.div`
  font-size: 7rem;
  padding: 0;
  position: relative;
  top: -6px;
`;
const BigText2 = styled.div`
  font-size: 2rem;
  position: relative;
  top: -30px;
  left: 5px;
  color: #8500b2;
`;

const BigTextHolding = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section8 = () => {
  return (
    <Container>
      <MainContent>
        <TextSection1>
          <TextTitle1>SUPORTE TÉCNICO</TextTitle1>
          <Text>
            Oferecemos suporte técnico para instalação e manutenção, garantindo
            que você configure o sistema rapidamente e sem complicações.
          </Text>
        </TextSection1>
        <TextContainer>
          <BigNumber>7</BigNumber>
          <BigTextHolding>
            <BigText>
              <span>DIAS</span> <br />
            </BigText>
            <BigText2>
              <span>
                <strong> DE GARANTIA</strong>
              </span>
            </BigText2>
          </BigTextHolding>
          <p>
            Experimente o LGPD LOCK sem riscos. Se não estiver satisfeito em até
            7 dias, devolveremos o seu investimento.
          </p>
        </TextContainer>
      </MainContent>
    </Container>
  );
};

export default Section8;
