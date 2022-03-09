import React from 'react';

const MyButton = ({...props}) => {
    return (
        <button {...props}>
            Send
        </button>

    )

};

export default MyButton;