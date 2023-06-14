import { COLORS } from "@/styles/colors";
import { MEDIA_QUERIES } from "@/styles/media-queries";
import styled from "styled-components";

export const MessageBaloon = styled(`div`)<{ incoming: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: ${({ incoming }) =>
    incoming ? COLORS.incomingBaloon : COLORS.outgoingBaloon};
  margin-left: ${({ incoming }) => (incoming ? "0" : "4rem")};
  margin-right: ${({ incoming }) => (incoming ? "4rem" : "0")};
  flex-wrap: wrap;
  border-radius: 0.5rem;

  ${MEDIA_QUERIES.mediumBreakpoint} {
    margin-left: ${({ incoming }) => (incoming ? "0" : "2rem")};
    margin-right: ${({ incoming }) => (incoming ? "2rem" : "0")};
  }
`;

export const UserInfoWrapper = styled(`div`)`
  display: flex;
  flex-direction: row;
`;
