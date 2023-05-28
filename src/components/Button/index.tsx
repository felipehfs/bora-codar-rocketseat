import { HTMLAttributes } from "react";
import { Container } from "./styles";
import { ClipLoader } from "react-spinners";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {loading ? <ClipLoader color="#fff" size={18} /> : children}
    </Container>
  );
}
