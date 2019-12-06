import React from 'react';
import './chatComponent.css';
import ChatInput from '../../components/chatInput/chatInput';
import ChatHistory from '../../components/chatHistory/chatHistory';
import ChatHeader from '../../components/chatHeader/chatHeader'

export default class ChatComponent extends React.Component {
    render() {

        const { viewOwner } = this.props;
        return (
            <div className="card large ">
                <ChatHeader viewOwner={viewOwner}/>
                <div className="card-content">
                    <ChatHistory
                        isGroupChat={this.props.isGroupChat}
                        messages={this.props.messages}
                        viewOwner={this.props.viewOwner}/>
                </div>
                <div className="card-action">
                    <ChatInput
                        senderName={viewOwner.name}
                        sendMessage={this.props.sendMessage}/>
                </div>
            </div>
        );
    }
}