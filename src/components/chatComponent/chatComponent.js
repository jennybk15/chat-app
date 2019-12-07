import React from 'react';
import './chatComponent.css';
import {ChatInput} from '../../components/chatInput/chatInput';
import {ChatHistory} from '../../components/chatHistory/chatHistory';
import {ChatHeader} from '../../components/chatHeader/chatHeader'

export const ChatComponent = (props) => {
    const { viewOwner, isGroupChat, dispatch, messages } = props;
    return (
        <div className="card large ">
            <ChatHeader viewOwner={viewOwner}/>
            <ChatHistory
                isGroupChat={isGroupChat}
                viewOwner={viewOwner}
                messages={messages}/>
            <ChatInput
                senderName={viewOwner.name}
                dispatch={dispatch}/>
        </div>
    );

};