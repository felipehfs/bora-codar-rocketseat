import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & > svg {
    color: ${({ theme }) => theme.colors.brand.default};
    width: 20px;
    height: 20px;
  }
`;
export const Container = styled.div`
  position: relative;
  ${({ theme }) => css`
    &:focus-within {
      border-bottom: 1.5px solid ${theme.colors.brand.light};
    }
  `}
`;
export const Input = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    width: 152px;
    padding-bottom: 4px;
    ::placeholder {
      color: ${theme.colors.brand.light};
    }
    color: ${theme.colors.neutrals.primary};
    font-size: ${theme.fonts.fontSize.paragraph};
    outline: none;
  `}
`;
export const Button = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 20%;
  right: 0;
  svg {
    color: ${({ theme }) => theme.colors.neutrals.closeButton};
  }
`;
