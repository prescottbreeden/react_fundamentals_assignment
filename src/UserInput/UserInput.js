import React from 'react';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input 
                onChange={props.changed}
                value={props.value}
                type="text" 
            />
        </div>
    )
};

export default UserInput;