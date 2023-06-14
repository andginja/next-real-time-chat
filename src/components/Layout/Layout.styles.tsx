import { COLORS } from "@/styles/colors";
import { MEDIA_QUERIES } from "@/styles/media-queries";
import styled from "styled-components";

export const LayoutContainer = styled(`div`)`
  min-height: 100vh;
  background-color: ${COLORS.backgroundLight};
  position: relative;
`;

export const ContentWrapper = styled(`div`)`
  padding: 1rem 16rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${MEDIA_QUERIES.mediumBreakpoint} {
    padding: 1rem 4rem;
  }

  ${MEDIA_QUERIES.mediumBreakpoint} {
    padding: 1rem 1rem;
  }
`;
