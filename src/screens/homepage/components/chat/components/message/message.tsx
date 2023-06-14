import React from "react";
import { MessageBaloon, UserInfoWrapper } from "./message.styles";
import { formatDateTime } from "@/utils/formatDateTime";

export type MessageComponentProps = {
  message: string;
  userName: string;
  userId: string;
  time: string;
  incoming: boolean;
};

const Message = ({
  message,
  userId,
  userName,
  time,
  incoming,
}: MessageComponentProps) => {
  console.log(userId, userName);
  return (
    <MessageBaloon incoming={incoming}>
      <h4>{userName}</h4>
      <p>{message}</p>
      <UserInfoWrapper>
        <small>{formatDateTime(time)}</small>
      </UserInfoWrapper>
    </MessageBaloon>
  );
};

export default Message;
