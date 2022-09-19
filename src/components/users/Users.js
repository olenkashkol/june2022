import React, {useEffect, useState} from 'react';

import {userService} from "../services/user.service";
import {User} from "../user/User";
import {postService} from "../services/post.service";

const Users = () => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    const [post,setPost]=useState(null)

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])


    const getUser = async (id) => {
        const {data} = await userService.getById(id);
        setUser(data)

    }

    const getPost = async (id) => {
        const{data}=await postService.getById(id)
        setPost(data)
    }

    return (
        <div>
            {user && <div>
                <h2>{user.id}- {user.name} {user.username}</h2>
                <p>city- {user.address.city}, street- {user.address.street}, suite- {user.address.suite}</p>
            </div>}
            {post && <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>}
            <hr/>
            {users.map(user => (<User key={user.id} user={user} getUser={getUser} getPost={getPost}/>))}
        </div>
    );
};

export {Users};