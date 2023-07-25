import styled from "styled-components";
import Button from "../button/button";

export const Wrapper = styled.section`
  margin-bottom: 0px;
`;

export const Tittle = styled(Button)`
  width: 100%;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: #ccc;
  font-size: 18px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  width: 100%;
  transition: 0.3s;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid #ddd;
  padding: ${(props) => props.theme.indent};
  line-height: 1.5;
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
`;
