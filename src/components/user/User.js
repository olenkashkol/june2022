import React from 'react';

const User = ({user:{id,name,username,email,address:{city}},getUser,getPost}) => {
    return (
        <div>
            <h2>{id} - {name}   {username}</h2>
            <p>{email}--{city}</p>
            <button onClick={()=>{getUser(id)}}>About</button>
            <button onClick={()=>{getPost(id)}}>Get post</button>
            <hr/>
        </div>
    );
};

export {User};


