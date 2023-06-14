import React, { useEffect, useRef } from "react";
import { StyledInput } from "./textArea.styles";

export const TextArea = (props: any) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [props.value]);

  return <StyledInput ref={textareaRef} {...props} />;
};
