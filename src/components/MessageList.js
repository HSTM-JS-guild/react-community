import React from 'react';
import Message from './Message';

const MessageList = (props) => {
    return (
        <div>
            {props.messages.map(message => <Message key={message.DiscussionPostKey} {...message}/>)}
        </div>
    );
};

export default MessageList;