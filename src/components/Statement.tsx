import React, {useState} from "react"
import { IStatement } from "../models"
import { Section } from "./Section";
import { sections } from "../data/sections";

interface StatementProps {
    statement: IStatement
}

export function Statement(props: StatementProps) {

    const [moreSections, setMoreSections] = useState(false);
    let haveUnread = props.statement.unreadCount > 0 ? true : false;

    return (
        <>
            <div className={`statement ${moreSections && "blue-border"}`} onClick={() => setMoreSections(!moreSections)}>
                <p className="defaultColor">{ props.statement.number }</p>
                {haveUnread && <div className="unreadCount">
                    <p className="unreadCount-text">{ props.statement.unreadCount }</p>
                </div>}
            </div>
            {moreSections && <div className="section-container">
                {sections.map(section => <Section section={section} key={section.id}/>)}
            </div>}
        </>
    )
}
