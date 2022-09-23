import {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import {User} from "../user/User";
import {UserForm} from "../userForm/UserForm";

const Users = ({getPosts}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map(user=>(<User key={user.id} user={user} getPosts={getPosts}/>))}

            <hr/>

        </div>
    );
};

export {Users};