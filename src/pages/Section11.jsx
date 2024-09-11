import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Lamina1 from "../assets/lamina1.png";
import Lamina2 from "../assets/lamina2.png";
import Lamina3 from "../assets/lamina3.png";

const Container = styled.div`
  /* 
  margin: 4rem auto;
  height: 100vh; */
  /* display: grid; */
  margin: 4rem auto;
  width: 100vw;
  height: 60vh;
  /* background-color: gray; */
  @media (max-width: 700px) {
    height: auto;
    margin: 4rem 0;
  }
`;
const MainContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2rem;
  margin: 0 auto;
  width: 60%;
  height: 100%;

  @media (max-width: 700px) {
    grid-template-columns: 100%;
    width: 80%;
  }
`;

const ContentContainer1 = styled.div`
  width: 100%;
  height: 100%;
  .swiper-container2 {
    background-color: purple;
    width: 100%;
    height: 100%;
  }
  border: 4px solid #8500b2;
  border-radius: 5px;

  @media (max-width: 700px) {
    width: 130%;
    height: 320px;
    width: 100vw;
    position: relative;
    /* left: vw; */
    min-width: 100vw;
    left: -7vw;
    min-width: 90vw;
    .swiper-container2 {
      width: 100vw;
      min-width: 90vw;
      position: relative;
      left: 0vw;
      background-color: purple;
    }
  }
`;
const ContentContainer2 = styled.div``;

const Title = styled.h3`
  font-size: 2rem;
  strong {
    color: #8500b2;
  }
`;

const Text = styled.h3`
  @media (max-width: 700px) {
    p {
      text-align: center;
    }
  }
`;

const Lamina = styled.img`
  width: 100%;
  height: 100%;
`;

const Section11 = () => {
  return (
    <Container>
      <MainContent>
        <ContentContainer1>
          <Swiper
            className="swiper-container2"
            spaceBetween={0}
            slidesPerView={"1"}
            // navigation={true}
            preventClicks={false}
            preventClicksPropagation={false}
            pagination={true}
            // scrollbar={{ draggable: true }}
          >
            <SwiperSlide className="slide2">
              <Lamina src={Lamina1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide2">
              <Lamina src={Lamina2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide2">
              <Lamina src={Lamina3} alt="" />
            </SwiperSlide>
          </Swiper>
        </ContentContainer1>
        <ContentContainer2>
          <Title>
            ATENÇÃO: <strong>FAÇA A SUA PARTE!</strong>
          </Title>
          <Text>
            <p>
              A Lei Geral de proteção de Dados está em vigor desde 2022, onde o
              código detém a sanção de multas que chegam a 50 milhões de reais
              ou 2% do faturamento anual da empresa.
            </p>
            <p>
              Até o momento, já foi registrado no Brasil X casos onde houve a
              aplicação de multas, sendo em diversos tipos de setores, como:
              construtoras, imobiliárias, empresa de transporte público, lojas,
              mercados, varejistas e prestadores de serviços que utilizam listas
              de leads e clientes para fins comerciais ou administrativos.
            </p>
            <p>
              Faça a sua parte como contador ou jurídico da empresa, enquadre os
              seus clientes e evite que a reputação de anos seja perdida em uma
              falha que poderia ter sido corrigida.
            </p>
          </Text>
        </ContentContainer2>
      </MainContent>
    </Container>
  );
};

export default Section11;
