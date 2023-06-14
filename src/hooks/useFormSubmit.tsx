import { FormEvent } from "react";

interface Message {
  datetime: string;
  userName: string;
  userId: string;
  message: string;
}

export const useFormSubmit = (
  socket: WebSocket | null,
  inputValue: string,
  setInputValue: (value: string) => void,
  user: string,
  userId: string
) => {
  const sendMessage = () => {
    if (inputValue.trim() !== "" && socket?.readyState === WebSocket.OPEN) {
      const messageObject: Message = {
        datetime: new Date().toISOString(),
        userName: user,
        userId: userId,
        message: inputValue,
      };

      socket.send(JSON.stringify(messageObject));
      setInputValue("");
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return { handleFormSubmit, handleKeyPress };
};
