import React from 'react';
import {formatDate} from '../../utils/date-time-utils';
import './chat-history-item.css';

export const ChatHistoryItem = (props) => {

    const {ownerIsSender, senderName, text, date, isUserJoined} = props;

    const displaySenderName = !isUserJoined && !ownerIsSender;

    const getMsgClass = () => {
        let clsName = 'collection-item title blue-text accent-1';
        if(isUserJoined) {
            clsName = clsName + ' light-blue ';
        }
        else if (ownerIsSender){
            clsName = clsName + ' light-green';
        }
        return clsName;
    };

    const getAlignClass = () => {
        return ownerIsSender && !isUserJoined ? 'right-align' :'left-align';
    };

    return (
        <li className={getMsgClass()} key={date}>
            {displaySenderName && <span>{senderName}</span>}
            <div className={getAlignClass()}>
                {isUserJoined && <span className="message-text blue-text accent-1">{senderName}</span>}
                <span className="message-text">{text}</span>
                <span className="message-date">{formatDate(date)}</span>
            </div>
        </li>
    );
};