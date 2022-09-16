import React from 'react';

const User = ({user:{id,name}, getUserInfo}) => {
    return (
        <div>
            {id}--{name}
            <button onClick={()=>getUserInfo(id)}>more info</button>
        </div>
    );
};

export {User};