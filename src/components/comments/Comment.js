import React from 'react';
import {useNavigate} from "react-router-dom"

const Comment = ({comment}) => {

    const {id, name,email}=comment

    const navigate=useNavigate()

    return (
        <div>
            <h3>{id}- {name}</h3>
            <p>email- {email}</p>
            <button onClick={()=>navigate(`${id}`,{state:{...comment}})}>click</button>
            <hr/>
        </div>
    );
};

export { Comment};