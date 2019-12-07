import React, {useReducer} from 'react';
import './app.css';
import {ChatComponent} from '../../components/chatComponent/chatComponent';
import {chatParticipants} from '../../data/chatParticipants';
import {chatReducer} from "./chat-reducer";

const App = () => {

    const [messages, dispatch] = useReducer(chatReducer, []);

    const getChatComponentWrapperClass = (participantsLength) => {
        let colSpan = 4;
        if (participantsLength > 0 && participantsLength < 12) {
            let s = 12 / participantsLength;
            if (s > 4) {
                colSpan = s;
            }
        }

        return "col s" + colSpan;
    };

    const chatComponentWrapperClass = getChatComponentWrapperClass(chatParticipants.length);
    const isGroupChat = chatParticipants.length > 2;

    return (
        <div className="container">
            <div className="row">
                {chatParticipants.map((participant) => {
                    return (
                        <div className={chatComponentWrapperClass}>
                            <ChatComponent
                                key={participant.id}
                                isGroupChat={isGroupChat}
                                viewOwner={participant}
                                messages={messages}
                                dispatch = {dispatch}
                                />
                        </div>
                    )
                })};
            </div>
        </div>
    );

};

export default App;

