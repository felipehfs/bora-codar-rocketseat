import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  max-width: 428px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutrals.surface};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100vh;
  animation: ${slideIn} 1s ease-in;
`;

export const Header = styled.header`
  padding: 24px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.stroke};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutrals.primary};
    font-size: ${theme.fonts.fontSize.heading};
  `}
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutrals.closeButton};

  svg {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

export const List = styled.ul`
  padding: 32px;
  flex: 1;
  overflow-y: scroll;
`;
export const ListItem = styled.li`
  display: flex;
  gap: 24px;
  & + & {
    margin-top: 48px;
  }
`;
export const Image = styled.img`
  width: 104px;
  height: 104px;
  object-fit: cover;
  border-radius: 8px;
`;
export const ListInfo = styled.div`
  flex: 1;
`;
export const ListInfoTitle = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${({ theme }) => css`
    color: ${theme.colors.neutrals.secondary};
  `}
`;

export const ListInfoFooter = styled.footer`
  margin-top: 14px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 800px) {
    align-items: flex-start;
    gap: 4px;
    flex-direction: column;
  }
`;

export const Price = styled.span`
  display: block;
  ${({ theme }) => css`
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.neutrals.primary};
  `}
`;

export const Resume = styled.section`
  padding: 32px;
  height: 222px;
`;
export const ResumeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutrals.secondary};
    font-size: ${theme.fonts.fontSize.heading};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;
export const ResumeBox = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: flex-end;
  margin-bottom: 32px;
`;
export const ResumePrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutrals.primary};
    font-size: ${theme.fonts.fontSize.heading};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;
