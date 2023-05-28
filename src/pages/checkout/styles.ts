import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutrals.background};
  display: flex;
  justify-content: flex-end;
`;
