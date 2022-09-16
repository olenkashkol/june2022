import React, {useEffect, useState} from 'react';
import {userService} from "../services/user.service";

const UserChoser = () => {

    let [user,setUser]=useState(null)
    let [id,setId]=useState(1)

    const increment=(id)=>{
        id++
        setId(id)
    }

    const decrement=(id)=>{
        id--
        setId(id)
    }

    useEffect(()=>{
     userService.getById(id).then(({data})=>setUser(data))
    },[id])

    return (
        <div>
            <hr/>
            {user && <div>{user.name}--{user.username}</div>}
            <hr/>
            <button onClick={()=>{increment(id)}}>+</button>
            <button onClick={()=>{decrement(id)}}>-</button>
        </div>
    );
};

export {UserChoser};