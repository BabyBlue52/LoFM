import React, { useState } from 'react';

export function ChatInput(props) {
    const messageHandler = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            props.getMessage(e.target.value)
            e.target.value = ""
        }
    }
    return (
        <React.Fragment>
            <textarea onKeyDown={messageHandler} placeholder="Type Something..."></textarea>
        </React.Fragment>
    )
}