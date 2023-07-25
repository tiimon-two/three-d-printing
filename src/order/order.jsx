import { useState } from "react";
import Button from "../button/button";
import { Label } from "./styles";

export default function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const isButtonEnable = name && phone && adress;

  const onChange = (evt, setChange) => setChange(evt.target.value);

  return (
    <form>
      <Label>
        Имя:{" "}
        <input
          name="name"
          value={name}
          onChange={(evt) => onChange(evt, setName)}
        />
      </Label>
      <Label>
        Телефон:{" "}
        <input
          name="phone"
          value={phone}
          onChange={(evt) => onChange(evt, setPhone)}
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <input
          name="adress"
          value={adress}
          onChange={(evt) => onChange(evt, setAdress)}
        />
      </Label>
      <Button
        disabled={!isButtonEnable}
        onClick={(evt) => {
          evt.preventDefault();
          console.log(
            `${name}, спасибо за заказ. Мы доставем его как можно скорее по адресу: ${adress}`
          );
        }}
      >
        Оформить
      </Button>
    </form>
  );
}
