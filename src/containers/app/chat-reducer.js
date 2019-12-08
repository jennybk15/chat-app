import React from 'react';

export const chatReducer = (state, action) => {
    switch (action.type) {
        case 'sendMessage':
            return {
                messages: [...state.messages, {
                    senderName: action.msg.senderName,
                    text: action.msg.text,
                    date: action.msg.date,
                    isUserJoined: false
                }],
                participants: state.participants
            };
        case 'addNewUser':
            return {
                participants: [...state.participants, {
                    id: action.msg.userDetails.id,
                    name: action.msg.userDetails.name,
                    avatar: action.msg.userDetails.avatar
                }],
                messages: [...state.messages, {
                    senderName: action.msg.userDetails.name,
                    text: ' has joined',
                    date: action.msg.date,
                    isUserJoined: true
                }]
            };
        default:
            return state;
    }
};