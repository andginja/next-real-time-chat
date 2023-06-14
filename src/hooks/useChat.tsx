import { useState, useEffect, useCallback } from "react";

type Message = {
  message: string;
  date: string;
  userName: string;
  userId: string;
};

const SERVER_URL = "ws://localhost:8080";

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const addMessage = useCallback((incomingMessage: any) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: incomingMessage.message,
        date: incomingMessage.datetime,
        userName: incomingMessage.userName,
        userId: incomingMessage.userId,
      },
    ]);
  }, []);

  useEffect(() => {
    const newSocket = new WebSocket(SERVER_URL);

    newSocket.onopen = () => console.log("WebSocket is open now.");
    newSocket.onclose = () => console.log("WebSocket is closed now.");
    newSocket.onerror = (error) => console.error("WebSocket Error: ", error);

    newSocket.onmessage = (event) => {
      console.log("WebSocket Message: ", event.data);

      const messageProcessing = (data: any) => {
        const incomingMessage = JSON.parse(data);
        addMessage(incomingMessage);
      };

      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result as string;
          messageProcessing(text);
        };
        reader.readAsText(event.data);
      } else {
        messageProcessing(event.data);
      }
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [addMessage]);

  return { messages, socket };
};

export default useChat;
