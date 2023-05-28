import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div``;
export const Sum = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.brand.default};
    color: ${theme.colors.brand.default};
    font-size: ${theme.fonts.fontSize.paragraph};

    &:hover {
      color: ${theme.colors.neutrals.white};
      background-color: ${theme.colors.brand.default};
    }
  `}
`;
export const Subtract = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.neutrals.stroke};
    color: ${theme.colors.brand.default};
    font-size: ${theme.fonts.fontSize.paragraph};

    &:hover {
      border-color: ${theme.colors.brand.default};
      color: ${theme.colors.neutrals.white};
    }
  `}
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
`;
export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.fontSize.paragraph};
    color: ${theme.colors.neutrals.white};
  `}
  margin-inline: 12px;
`;
