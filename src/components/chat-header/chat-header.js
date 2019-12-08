import React from 'react';
import './chat-header.css'

export const ChatHeader = (props) => {

    const {viewOwner} = props;
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="brand-logo left">
                        <span className="chip">
                             <img src={viewOwner.avatar} alt={viewOwner.name}/>
                                  <span>{viewOwner.name}</span>
                                </span>
                </div>
            </div>
        </nav>
    );
};