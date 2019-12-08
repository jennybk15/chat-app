import React, { useReducer } from 'react';
import './app.css';
import { ChatComponent } from '../../components/chat-component/chat-component';
import { ChatAddUser } from '../../components/chat-add-user/chat-add-user';
import { chatReducer } from "./chat-reducer";
import { chatParticipants } from '../../data/chat-participants';

const App = () => {

    const initialState = {
        messages: [],
        participants: []
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
            <ChatAddUser dispatch={ dispatch } users={ state.participants }/>
            <div className="row">
                { state.participants.map((participant) => {
                    return (
                        <div className={ chatComponentWrapperClass }>
                            <ChatComponent
                                key={ participant.id }
                                isGroupChat={ isGroupChat }
                                viewOwner={ participant }
                                messages={ state.messages }
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

