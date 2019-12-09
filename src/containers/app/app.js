import React, { useReducer } from 'react';
import './app.css';
import { ChatComponent } from '../../components/chat-component/chat-component';
import { ChatAddUser } from '../../components/chat-add-user/chat-add-user';
import { chatReducer } from "./chat-reducer";
import { chatParticipants } from '../../data/chat-participants';

const App = () => {

    const initialState = {
        messages: [],
        participants: chatParticipants
    };

    const [state, dispatch] = useReducer(chatReducer, initialState);
    const { participants, messages } = state;

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

    const chatComponentWrapperClass = getChatComponentWrapperClass(participants.length);
    const isGroupChat = participants.length > 2;

    return (
        <div className="container">
            <ChatAddUser dispatch={ dispatch } users={ participants }/>
            <div className="row">
                { participants.map((participant) => {
                    return (
                        <div className={ chatComponentWrapperClass }>
                            <ChatComponent
                                key={ participant.id }
                                isGroupChat={ isGroupChat }
                                viewOwner={ participant }
                                messages={ messages }
                                dispatch={ dispatch }
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );

};

export default App;

