import React, { useRef } from 'react';

export const ChatAddUser = (props) => {

    const inputEl = useRef(null);
    const { dispatch, users } = props;

    const onSubmit = (e) => {
        e.preventDefault();

        const userName = inputEl.current.value;
        if (userName.length === 0) {
            return;
        }
        const userDetails = {
            id: users.length,
            name: userName,
            avatar: '//robohash.org/'+ users.length + userName + '?set=set4&bgset=bg2&size=70x70'
        };

        dispatch({ type: 'addNewUser', userDetails: userDetails });

        inputEl.current.value = '';
        inputEl.current.focus();
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="row">
                    <form className="container" onSubmit={ onSubmit }>
                        <div className="input-field col s3">
                            <input type="text"
                                   ref={ inputEl }
                                   placeholder="Add new user"/>
                        </div>
                    </form>
                </div>
            </div>
        </nav>);

};