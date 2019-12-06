import React from 'react';
import './chatInput.css'

export default class ChatInput extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();

        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }
        const messageToSend = {
            senderName: this.props.senderName,
            text: message,
            date: new Date().valueOf()
        };

        this.props.sendMessage(messageToSend);

        this.refs.txtMessage.value = '';
        this.refs.txtMessage.focus();
    };

    render() {
        return (
            <div className="">
                <form className="container" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="prefix mdi-communication-chat"/>
                            <input
                                type="text"
                                ref="txtMessage"
                                placeholder="Type a message"/>

                        </div>
                        <div className="input-field col s2">
                            <button type="submit" className="waves-effect waves-light btn-floating btn-small">
                                <i className="mdi-content-send"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}