import { COLORS } from "@/styles/colors";
import styled from "styled-components";

export const StyledInput = styled("textarea")`
  display: block;
  width: 100%;
  min-height: 2rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: ${COLORS.backgroundWhite};
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: none; // this will prevent manual resizing by user.

  &:focus {
    color: ${COLORS.primary};
    background-color: ${COLORS.backgroundWhite};
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
