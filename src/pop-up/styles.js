import styled from "styled-components";
import Button from "../button/button";

export const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #000000;
`;

export const Header = styled.header`
  position: relative;
  border-bottom: 1px solid black;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Close = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;

  &::before {
    position: absolute;
    width: 2px;
    height: 10px;
    content: "";
    left: 12px;
    top: 8px;
    background-color: black;
    transform: rotate(45deg);
  }

  &::after {
    position: absolute;
    width: 2px;
    height: 10px;
    content: "";
    left: 12px;
    top: 8px;
    background-color: black;
    transform: rotate(-45deg);
  }
`;
