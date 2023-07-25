import { useEffect, useRef, useState } from "react";
import { Wrapper } from "../pop-up/styles";
import { Content, ContentWrapper, Tittle } from "./styles";

export default function Accordeon({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const openContent = useRef(null);
  useEffect(() => {
    setHeight(openContent.current.offsetHeight);
  }, [height, activeIndex, items]);
  return (
    <div>
      {items &&
        items.length &&
        items.map((item, index) =>
          index === activeIndex ? (
            <Wrapper key={item.title}>
              <Tittle as="span" isActive>
                {item.title}
              </Tittle>
              <ContentWrapper style={{ height }}>
                <Content ref={openContent}>{item.content}</Content>
              </ContentWrapper>
            </Wrapper>
          ) : (
            <Wrapper key={item.title}>
              <Tittle onClick={() => setActiveIndex(index)}>
                {item.title}
              </Tittle>
              <ContentWrapper>
                <Content>{item.content}</Content>
              </ContentWrapper>
            </Wrapper>
          )
        )}
    </div>
  );
}
