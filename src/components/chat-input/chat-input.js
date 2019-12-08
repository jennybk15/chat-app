import React, { useRef } from 'react';
import './chat-input.css'

export const ChatInput = (props) => {

    const inputEl = useRef(null);
    const { dispatch, senderName } = props;

    const onSubmit = (e) => {
        e.preventDefault();

        const message = inputEl.current.value;
        if (message.length === 0) {
            return;
        }
        const messageToSend = {
            senderName: senderName,
            text: message,
            date: new Date().valueOf()
        };

        dispatch({ type: 'sendMessage', msg: messageToSend });

        inputEl.current.value = '';
        inputEl.current.focus();
    };

    return (
        <div className="card-action">
            <form className="container" onSubmit={ onSubmit }>
                <div className="row">
                    <div className="input-field col s10">
                        <i className="prefix mdi-communication-chat"/>
                        <input
                            type="text"
                            ref={ inputEl }
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

};