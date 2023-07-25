import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text, onShowMore, isShowAllDescription }) {
  return (
    <>
      {text}
      <DescriptionButton onClick={onShowMore}>
        {isShowAllDescription ? "Скрыть" : "Показать"}
      </DescriptionButton>
    </>
  );
}

export default Description;
