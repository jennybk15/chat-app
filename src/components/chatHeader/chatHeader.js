import React from 'react';
import './chatHeader.css'

export default class ChatHeader extends React.Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="brand-logo left">
                        <span className="chip">
                             <img src={this.props.viewOwner.avatar} alt={this.props.viewOwner.name}/>
                                  <span>{this.props.viewOwner.name}</span>
                                </span>
                    </div>
                </div>
            </nav>
        );
    }
}