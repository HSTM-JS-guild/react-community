import React from 'react';

const Message = (props) => {
    return (
        <div>
            <div>Subject: {props.Subject}</div>
            <div>Body: {props.Body}</div>
            <div>Author: {props.Author.DisplayName}</div>
        </div>
    );
};

export default Message;