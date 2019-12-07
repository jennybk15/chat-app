import React from 'react';

export const chatReducer = (state, action) =>{
    switch(action.type){
        case 'sendMessage':
            return {
                messages: [...state.messages, {
                    senderName: action.msg.senderName,
                    text: action.msg.text,
                    date: action.msg.date
                }],
            participants: state.participants};
        case 'addNewUser':
            return {
                participants: [...state.participants, {
                    id: action.userDetails.id,
                    name: action.userDetails.name,
                    avatar: action.userDetails.avatar
                }],
            messages: state.messages};
        default:
            return state;
    }
};