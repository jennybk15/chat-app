import React, {useReducer} from 'react';
import './app.css';
import {ChatComponent} from '../../components/chatComponent/chatComponent';
import {ChatAddUser} from '../../components/chat-add-user/chat-add-user';
import {chatParticipants} from '../../data/chatParticipants';
import {chatReducer} from "./chat-reducer";

const App = () => {

    const initialState = {
        messages:[],
        participants: chatParticipants
    };

    const [state, dispatch] = useReducer(chatReducer, initialState);

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

    const chatComponentWrapperClass = getChatComponentWrapperClass(state.participants.length);
    const isGroupChat = state.participants.length > 2;

    return (
        <div className="container">
            <nav>
                <div className="nav-wrapper">

                    <ChatAddUser dispatch={dispatch} />
                </div>
            </nav>

            <div className="row">
                {state.participants.map((participant) => {
                    return (
                        <div className={chatComponentWrapperClass}>
                            <ChatComponent
                                key={participant.id}
                                isGroupChat={isGroupChat}
                                viewOwner={participant}
                                messages={state.messages}
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

