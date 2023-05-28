import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.button`
  width: 100%;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
  ${({ theme }) => css`
    color: ${theme.colors.neutrals.primary};
    background-color: ${theme.colors.brand.default};
    border-color: ${theme.colors.brand.default};
  `}
`;
