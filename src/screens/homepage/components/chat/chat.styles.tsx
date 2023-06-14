import { COLORS } from "@/styles/colors";
import { MEDIA_QUERIES } from "@/styles/media-queries";
import styled from "styled-components";

export const ChatContainer = styled(`div`)`
  display: flex;
  flex-direction: column;
  color: ${COLORS.primary};
  gap: 1rem;
`;

export const MessageContainer = styled(`div`)`
  display: flex;
  background-color: ${COLORS.backgroundWhite};
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

export const FormContainer = styled(`div`)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: end;
`;

export const ChatButton = styled(`button`)`
  display: inline-block;
  font-weight: 600;
  width: 10%;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: white;
  background-color: ${COLORS.primary};
  border-color: ${COLORS.primary};
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #0056b3;
  }

  ${MEDIA_QUERIES.mediumBreakpoint} {
    width: 20%;
  }

  ${MEDIA_QUERIES.mobilePortrait} {
    width: 50%;
  }
`;
