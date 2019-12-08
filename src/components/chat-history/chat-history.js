import React from 'react';
import './chat-history.css';
import {ChatHistoryItem} from '../chat-history-item/chat-history-item';

export const ChatHistory = (props) => {

    const { viewOwner, isGroupChat, messages } = props;

    return (
        <div className="card-content">
            <ul className="collection">
                {messages.map((message) => {
                    return (
                        <ChatHistoryItem
                            isGroupChat={isGroupChat}
                            ownerIsSender={viewOwner.name === message.senderName}
                            key={message.date}
                            senderName={message.senderName}
                            date={message.date}
                            text={message.text}
                            isUserJoined = {message.isUserJoined}
                        />);

                })}
            </ul>
        </div>

    );

};