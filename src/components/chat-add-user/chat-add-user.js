import React, {useRef} from 'react';

export const ChatAddUser = (props) => {

    const inputEl  = useRef(null);
    const {dispatch} = props;

    const onSubmit = (e) => {
        e.preventDefault();

        const userName = inputEl.current.value;
        if (userName.length === 0) {
            return;
        }
        const userDetails = {
            id: 6,
            name: userName,
            avatar: '//robohash.org/2323?set=set4&bgset=bg2&size=70x70'
        };

        dispatch({type: 'addNewUser', userDetails: userDetails});

        inputEl.current.value = '';
        inputEl.current.focus();
    };

    return (
        <div className="row">
            <form className="container" onSubmit={onSubmit}>
            <div className="input-field col s3">
                <input type="text"
                       ref={inputEl}
                       placeholder="Add new user" />
            </div>
            <div className="input-field col s9">
                <a className="btn-floating btn-small waves-effect waves-light red" />
            </div>
            </form>
        </div>

          );

};