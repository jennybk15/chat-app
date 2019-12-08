import React from 'react';
import {formatDate} from '../../utils/date-time-utils';
import './chat-history-item.css';

export const ChatHistoryItem = (props) => {

    const {ownerIsSender, index, isGroupChat, senderName, text, date} = props;
    const clsName = props.ownerIsSender ? "blue-text title light-green accent-1 right-align" : "title";
    return (
        <li className={"collection-item " + clsName} key={index}>
            {isGroupChat && !ownerIsSender &&
            <span className={clsName}>{senderName}</span>}
            <p>

                {ownerIsSender && <div className="right-align">
                    <span className="message-text">{text}</span>
                    <span className="message-date">{formatDate(date)}</span>
                </div>}

                {!ownerIsSender && <div className="left-align">

                    <span className="message-text">{text}</span>
                    <span className="message-date">{formatDate(date)}</span>
                </div>}
            </p>
        </li>
    );

};