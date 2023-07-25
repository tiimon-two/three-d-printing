import { useEffect } from "react";
import { Close, Header, Wrapper } from "./styles";

export default function PopUp({ isShow, title, children, onClose }) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  });

  return isShow ? (
    <Wrapper>
      <Header>
        {title}
        <Close size="small" onClick={onClose} />
      </Header>
      {children}
    </Wrapper>
  ) : null;
}
