import React from "react";
import { IMessage } from "../models";

interface MessageProps {
    message: IMessage
}

export function Message(props: MessageProps) {

    let messagePosition = props.message.isMy ? "message-container" : "message-container-reversed";

    return (
        <div className={`${messagePosition} defaultColor`}>
            <p className="message-date">{ props.message.sendDate }</p>
            <p className={`message-text ${props.message.isUnread && "unread-message-bg"}`}>{ props.message.text }</p>
        </div>
    )
}