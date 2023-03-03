import React, {useState} from "react";
import { messages } from "../data/messages";
import { ISection } from "../models";
import { Message } from "./Message";

interface SectionProps {
    section: ISection
}

export function Section(props: SectionProps) {

    const [moreMessages, setMoreMessages] = useState(false);
    let haveUnread = props.section.unreadCount > 0 ? true : false;
    
    return (
        <>
            <div className={`section ${moreMessages && "pink-border"}`} onClick={() => setMoreMessages(!moreMessages)}>
                <p className="defaultColor">{ props.section.name }</p>
                {haveUnread && <div className="unreadCount">
                    <p className="unreadCount-text">{ props.section.unreadCount }</p>
                </div>}
            </div>
            {moreMessages && <div>
                {messages.map(message => <Message message={message} key={message.id}/>)}
            </div>}
        </>
    )

}