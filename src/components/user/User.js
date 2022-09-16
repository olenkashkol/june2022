import React from 'react';

const User = (props) => {

    let {user:{name}}= props

    return (
        <div>
            <h2>{name}</h2>
            <hr/>
        </div>
    );
};

export default User;