import React, { ChangeEventHandler } from "react";
import { Container, Button, Input, Wrapper } from "./styles";
import { BsTag } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

type PriceTageProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PriceTag({ value, onChange }: PriceTageProps) {
  return (
    <Wrapper>
      <BsTag />
      <Container>
        <Input
          placeholder="Adicionar um cupom"
          onChange={(event) => onChange(event.target.value)}
          value={value}
        />
        {value && (
          <Button onClick={() => onChange("")}>
            <MdOutlineClose />
          </Button>
        )}
      </Container>
    </Wrapper>
  );
}
