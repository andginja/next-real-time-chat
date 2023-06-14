import { COLORS } from "@/styles/colors";
import styled from "styled-components";

export const Button = styled("button")`
  display: inline-block;
  font-weight: 600;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: white;
  background-color: ${COLORS.primary};
  border-color: ${COLORS.primary};
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const InputWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled("label")`
  margin-bottom: 0.5rem;
  color: ${COLORS.primary};
`;

export const Input = styled("input")`
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: ${COLORS.backgroundWhite};
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: ${COLORS.primary};
    background-color: ${COLORS.backgroundWhite};
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
