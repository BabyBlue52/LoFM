import React, { useState } from 'react';

export function ChatInput(props) {
    const [formValue, setFormValue] = useState('')

    return (
        <React.Fragment>
            <form onSubmit={props.sendMessage}>
                <input value={formValue} placeholder="Type Something..." onChange={(e) => setFormValue(e.target.value)}/>
            </form>    
        </React.Fragment>
    )
}