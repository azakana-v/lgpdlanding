import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Tela1 from "../assets/tela1.png";
import Tela2 from "../assets/tela2.png";
import Tela3 from "../assets/tela3.png";
import Tela4 from "../assets/tela4.jpg";

const MainContainer = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainContent = styled.div`
  width: 60%;
  height: 80%;
  border: 10px solid #8500b2;
  border-radius: 5px;
  .slide {
    background-color: purple;
    /* width: 40%; */
    z-index: -1;
  }
  .swiper-button-prev {
    /* margin-right: 10rem; */
    /* position: relative; */
    /* left: 0; */
    z-index: 999;
  }
  .swiper-container {
    height: 100%;
  }
  @media (max-width: 700px) {
    width: 95%;
    height: 45%;
  }
`;

const Lamina = styled.img`
  width: 100%;
  height: 100%;
`;
const Section5 = () => {
  return (
    <MainContainer>
      <MainContent>
        <Swiper
          className="swiper-container"
          spaceBetween={0}
          slidesPerView={"1"}
          // navigation={true}
          preventClicks={false}
          preventClicksPropagation={false}
          pagination={true}
          // scrollbar={{ draggable: true }}
        >
          <Lamina src={Tela1} />
          <SwiperSlide className="slide">
            <Lamina src={Tela1} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Lamina src={Tela2} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Lamina src={Tela3} />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Lamina src={Tela4} />
          </SwiperSlide>
        </Swiper>
      </MainContent>
    </MainContainer>
  );
};

export default Section5;
