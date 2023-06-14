import { COLORS } from "@/styles/colors";
import styled from "styled-components";

export const CardWrapper = styled(`div`)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20rem;
  border-radius: 1rem;
  padding: 1rem;
  background: ${COLORS.backgroundWhite};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
