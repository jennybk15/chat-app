import React from 'react';
import './chat-component.css';
import { ChatInput } from '../chat-input/chat-input';
import { ChatHistory } from '../chat-history/chat-history';
import { ChatHeader } from '../chat-header/chat-header'

export const ChatComponent = (props) => {
    const { viewOwner, isGroupChat, dispatch, messages } = props;
    return (
        <div className="card large ">
            <ChatHeader viewOwner={ viewOwner }/>
            <ChatHistory
                isGroupChat={ isGroupChat }
                viewOwner={ viewOwner }
                messages={ messages }/>
            <ChatInput
                senderName={ viewOwner.name }
                dispatch={ dispatch }/>
        </div>
    );

};