import { COLORS } from "@/styles/colors";
import { MEDIA_QUERIES } from "@/styles/media-queries";
import styled from "styled-components";

export const HeaderContainer = styled(`div`)`
  height: 3rem;
  background-color: ${COLORS.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16rem;

  ${MEDIA_QUERIES.mediumBreakpoint} {
    padding: 0rem 4rem;
  }

  ${MEDIA_QUERIES.mediumBreakpoint} {
    padding: 0rem 1rem;
  }
`;

export const LogWrapper = styled(`div`)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const LogoutButton = styled(`button`)`
  display: inline-block;
  font-weight: 600;
  width: 100%;
  height: 2rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0 1rem;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${COLORS.primary};
  background-color: ${COLORS.backgroundLight};
  border-color: ${COLORS.backgroundLight};
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }
`;
