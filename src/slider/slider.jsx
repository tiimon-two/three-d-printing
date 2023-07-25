import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import { Image } from "/src/elements";
import { StyledButton, StyledSlider, StyledWrapper } from "./styles";
import { useRef } from "react";

export default function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrev = useRef(null);
  const navigationNext = useRef(null);
  return (
    <StyledWrapper>
      <StyledButton left ref={navigationPrev} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNext} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSlider
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrev.current;
          swiper.params.navigation.nextEl = navigationNext.current;
        }}
        navigation={{
          prevEl: navigationPrev.current,
          nextEl: navigationNext.current
        }}
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"
                width="200"
                height="257"
                maxWidth="200"
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </StyledWrapper>
  );
}
