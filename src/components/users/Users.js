import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import {User} from "../user/User";

const Users = () => {
let [users,setUsers]=useState([])
    let [user,setUser]=useState(null)

    useEffect(()=>{
        userService.getUsers().then(({data})=>setUsers(data))
    },[])

    const getUserInfo=async(id)=>{
    const {data}=await userService.getById(id)
        setUser(data)
    }

    return (
        <div>
            <div>
                {user?.id}--{user?.name}--{user?.username}
            </div>
            {users.map(user=>(<User user={user} key={user.id} getUserInfo={getUserInfo}/>))}
        </div>
    );
};

export {Users};