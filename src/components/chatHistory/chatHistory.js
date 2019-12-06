import React from 'react';
import './chatHistory.css';
import ChatHistoryItem from '../chatHistoryItem/chatHistoryItem';

export default class ChatHistory extends React.Component {

   render() {
       const { viewOwner, isGroupChat, messages } = this.props;
        return(
            <ul className="collection">
                {messages.map((message) => {
                    return (
                        <ChatHistoryItem
                            isGroupChat = {isGroupChat}
                            ownerIsSender = {viewOwner.name === message.senderName}
                            key={message.date}
                            senderName={message.senderName}
                            date={message.date}
                            text={message.text}
                        />);

                })}
            </ul>
        );
    }
}