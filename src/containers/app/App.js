import React from 'react';
import './app.css';
import ChatComponent from '../../components/chatComponent/chatComponent';
import {chatParticipants} from '../../data/chatParticipants';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    sendMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, message]
        });
    };

    getChatComponentWrapperClass = (participantsLength) => {
        let colSpan = 4;
        if (participantsLength > 0 && participantsLength < 12) {
            let s = 12 / participantsLength;
            if (s > 4){
                colSpan = s;
            }
        }

        return "col s" + colSpan;
    };

    render() {
        const chatComponentWrapperClass = this.getChatComponentWrapperClass(chatParticipants.length);
        const isGroupChat = chatParticipants.length > 2;
        return (
            <div className="container">
                <div className="row">
                    {chatParticipants.map((participant) => {
                        return (
                            <div className={chatComponentWrapperClass}>
                                <ChatComponent
                                    key={participant.id}
                                    isGroupChat = {isGroupChat}
                                    viewOwner={participant}
                                    messages={this.state.messages}
                                    sendMessage={this.sendMessage} ref={'participant' + participant.id}/>
                            </div>
                        )
                    })};
                </div>
            </div>
        );
    }
}

export default App;

