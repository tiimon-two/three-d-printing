import styled from "styled-components";
import { Swiper } from "swiper/react";
import Button from "../button/button";

export const StyledSlider = styled(Swiper)`
  width: 200px;
  height: 257px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.left ? "5px" : "auto")};
  right: ${(props) => (props.right ? "5px" : "auto")};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;

export const StyledWrapper = styled.div`
  position: relative;
`;
