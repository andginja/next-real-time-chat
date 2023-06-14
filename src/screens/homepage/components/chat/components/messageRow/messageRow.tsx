import React, { ReactNode } from "react";
import { Suspense } from "react";
const Message = React.lazy(() => import("../message/message"));

type MessageRowProps = {
  index: number;
  style: React.CSSProperties;
  message: {
    message: string;
    date: string;
    userName: string;
    userId: string;
  };
  userId: string;
};

const MessageRow: React.FC<MessageRowProps> = ({
  index,
  style,
  message,
  userId,
}) => {
  const incomingMessage = message.userId !== userId;
  console.log(message.userId, userId);
  console.log(incomingMessage);
  return (
    <div style={style}>
      <Suspense fallback={<div>Loading...</div>}>
        <Message
          key={`Message${message.date}-${index}-${message.userId}`}
          message={message.message}
          time={message.date}
          userName={message.userName}
          userId={message.userId}
          incoming={incomingMessage}
        />
      </Suspense>
    </div>
  );
};

export default MessageRow;
