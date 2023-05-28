import { Container, Subtract, Text, Sum } from "./styles";

type StepperProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function Stepper({ value, onChange }: StepperProps) {
  return (
    <Container>
      <Subtract onClick={() => onChange(value - 1)}>-</Subtract>
      <Text>{value}</Text>
      <Sum onClick={() => onChange(value + 1)}>+</Sum>
    </Container>
  );
}
