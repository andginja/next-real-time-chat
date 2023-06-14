import { useState, ChangeEvent } from "react";

export const useInputChange = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return { inputValue, handleInputChange, setInputValue };
};
