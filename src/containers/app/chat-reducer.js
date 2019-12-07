import React from 'react';

export const chatReducer = (state, action) =>{
    switch(action.type){
        case 'sendMessage':
            return [...state, {
                senderName: action.msg.senderName,
                text: action.msg.text,
                date: action.msg.date
            }];

        default:
            return state;
    }
};