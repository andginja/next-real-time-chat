import React, { useContext, useRef, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import {
  ChatContainer,
  MessageContainer,
  ChatButton,
  FormContainer,
} from "./chat.styles";
import AuthContext from "@/utils/context/auth-context";
import useChat from "@/hooks/useChat";
import MessageRow from "./components/messageRow/messageRow";
import { TextArea } from "./components/textArea/textArea";
import { useInputChange } from "@/hooks/useInputChange";
import { useFormSubmit } from "@/hooks/useFormSubmit";

export const Chat = () => {
  const { messages, socket } = useChat();
  const { user, userId } = useContext(AuthContext);

  const { inputValue, handleInputChange, setInputValue } = useInputChange();

  const listRef = useRef<List>(null);

  const { handleFormSubmit, handleKeyPress } = useFormSubmit(
    socket,
    inputValue,
    setInputValue,
    user,
    userId
  );

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToItem(messages.length - 1, "end");
    }
  }, [messages]);

  return (
    <ChatContainer>
      <h1>Chat App</h1>
      <MessageContainer>
        <List
          ref={listRef}
          height={600}
          itemCount={messages.length}
          itemSize={80}
          width="100%"
        >
          {({ index, style }) => (
            <MessageRow
              index={index}
              style={style}
              message={messages[index]}
              userId={userId}
            />
          )}
        </List>
        <form onSubmit={handleFormSubmit}>
          <FormContainer>
            <TextArea
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter your message"
              onKeyDown={handleKeyPress}
            />
            <ChatButton type="submit">Send</ChatButton>
          </FormContainer>
        </form>
      </MessageContainer>
    </ChatContainer>
  );
};

export default Chat;
